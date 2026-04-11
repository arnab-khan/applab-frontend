import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  content: string;
  image?: string;
  url?: string;
  siteName?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Seo {
  private title = inject(Title);
  private meta = inject(Meta);

  update({ title, content, image, url, siteName, type }: SeoConfig) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content });
    this.meta.updateTag({ property: 'og:type', content: type || 'website' });

    if (siteName) {
      this.meta.updateTag({ property: 'og:site_name', content: siteName });
    }

    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }

    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
    }

    this.meta.updateTag({ name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content });

    if (image) {
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }

    if (url) {
      this.meta.updateTag({ name: 'twitter:url', content: url });
    }
  }
}
