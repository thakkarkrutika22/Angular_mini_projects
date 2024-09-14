import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const expectedRoles = route.data['roles'] as Array<string>;
    const userRoles = authService.getUserRoles();

    const hasRole = expectedRoles.some(role => userRoles.includes(role));
  const router = inject(Router);
  
  if (authService.isLoggedIn() && hasRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
