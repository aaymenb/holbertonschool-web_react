export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isLoggedIn) {
  if (isLoggedIn) {
    return 'Welcome back!';
  }
  return 'Login to access the full dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
