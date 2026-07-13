import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { provideState } from '@ngrx/store';
import { courseReducer } from './store/course/course.reducer';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { loadingInterceptor } from './interceptors/loading-interceptor';
export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true
    }),
    provideStore({}),
provideState('course', courseReducer),
provideState('enrollment', enrollmentReducer),
provideEffects(CourseEffects),
provideStoreDevtools({
  maxAge: 25,
  logOnly: false,
  autoPause: false,
  trace: true,
  connectInZone: true
}),

    provideRouter(routes),

    provideHttpClient(
     withInterceptors([
  authInterceptor,
  errorHandlerInterceptor,
  loadingInterceptor
])
    )

  ]

};