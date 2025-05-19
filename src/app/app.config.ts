import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, InMemoryScrollingOptions, InMemoryScrollingFeature, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,inMemoryScrollingFeature)    // (optional, improves navigation timing))]
  ]
};


