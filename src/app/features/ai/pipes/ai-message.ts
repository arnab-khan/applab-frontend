import { inject, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { Router, UrlTree } from '@angular/router';

interface AiMessagePart {
  text: string;
  bold: boolean;
  route?: UrlTree;
}

@Pipe({ name: 'aiMessage' })
export class AiMessagePipe implements PipeTransform {
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private location = inject(Location);

  transform(message: string): AiMessagePart[] {
    const parts: AiMessagePart[] = [];
    // Keep rendering as text bindings: model output must never become raw HTML.
    const sections = message.replace(/^(\s*)\*[\t ]+/gm, '$1• ').split(/\*\*([^*]+)\*\*/g);
    sections.forEach((section, index) => {
      const bold = index % 2 === 1;
      let offset = 0;
      const routes = /router__(?:<(\/[^\s<>]*)>|(\/[^\s<>*`"']*))/g;
      for (const match of section.matchAll(routes)) {
        const start = match.index!;
        if (start > offset) parts.push({ text: section.slice(offset, start), bold });
        const rawRoute = match[1] ?? match[2];
        const route = match[1] ? rawRoute : rawRoute.replace(/[.,!;:)]+$/, '');
        if (route.startsWith('//') || route.includes('\\')) {
          parts.push({ text: match[0], bold });
        } else {
          try {
            const routeTree = this.router.parseUrl(route);
            const url = this.location.prepareExternalUrl(this.router.serializeUrl(routeTree));
            parts.push({ text: new URL(url, this.document.baseURI).href, bold, route: routeTree });
            if (!match[1] && route.length < rawRoute.length) {
              parts.push({ text: rawRoute.slice(route.length), bold });
            }
          } catch {
            parts.push({ text: match[0], bold });
          }
        }
        offset = start + match[0].length;
      }
      if (offset < section.length) parts.push({ text: section.slice(offset), bold });
    });
    return parts;
  }
}
