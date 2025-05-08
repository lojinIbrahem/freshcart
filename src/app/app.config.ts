import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_TOKEN } from './token/api-token';
import { environment } from './environments/environment';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(withFetch()),
      provideClientHydration(withEventReplay()),
      {
        provide : API_TOKEN ,
        useValue: environment.baseURL
      },
      importProvidersFrom([BrowserAnimationsModule]),
      provideToastr(),
    ]
};
