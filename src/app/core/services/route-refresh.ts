import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteRefresh extends BaseRouteReuseStrategy {
  refreshing = false;

  override shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return !this.refreshing && super.shouldReuseRoute(future, current);
  }
}

@Injectable({ providedIn: 'root' })
export class PageRefresh {
  private router = inject(Router);
  private strategy = inject(RouteRefresh);

  async refresh(): Promise<void> {
    if (this.strategy.refreshing || this.router.currentNavigation()) return;

    const routes = new Set(this.getActiveRoutes(this.router.routerState.snapshot.root));
    const originalPolicies = [...routes].map(route => ({ route, policy: route.runGuardsAndResolvers }));
    this.strategy.refreshing = true;
    try {
      // Same-URL navigation must also reload data supplied by route resolvers.
      for (const route of routes) route.runGuardsAndResolvers = 'always';
      await this.router.navigateByUrl(this.router.url, {
        onSameUrlNavigation: 'reload',
        replaceUrl: true,
      });
    } finally {
      for (const { route, policy } of originalPolicies) route.runGuardsAndResolvers = policy;
      this.strategy.refreshing = false;
    }
  }

  private getActiveRoutes(snapshot: ActivatedRouteSnapshot): NonNullable<ActivatedRouteSnapshot['routeConfig']>[] {
    return [
      ...(snapshot.routeConfig ? [snapshot.routeConfig] : []),
      ...snapshot.children.flatMap(child => this.getActiveRoutes(child)),
    ];
  }
}
