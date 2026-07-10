import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';

import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {

        alert('Unauthorized! Redirecting to Home...');
        router.navigate(['/']);

      } else if (error.status === 500) {

        alert('Internal Server Error!');

      } else {

        console.error('HTTP Error:', error);

      }

      return throwError(() => error);

    })

  );

};