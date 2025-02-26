import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn.pipe(
    tap(loggedIn => console.log('AuthGuard: loggedIn =', loggedIn)),
    tap(loggedIn => {
      if (!loggedIn) {
        console.log('AuthGuard: Not logged in, redirecting to /login');
        router.navigate(['/login']);
      }
    }),
    map(loggedIn => loggedIn) 
  );
};