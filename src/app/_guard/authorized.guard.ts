import { CanActivateFn } from '@angular/router';

export const authorizedGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('key');
  if (isLoggedIn === 'true') {
    return true;
  } else {
    window.location.href = '/auth/login';
    return false;
  }
};
