import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  describe('getCurrentYear', () => {
    test('returns the current year', () => {
      const expectedYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(expectedYear);
    });
  });

  describe('getFooterCopy', () => {
    test('returns "Welcome back!" when the user is logged in', () => {
      expect(getFooterCopy(true)).toBe('Welcome back!');
    });

    test('returns "Login to access the full dashboard" when the user is not logged in', () => {
      expect(getFooterCopy(false)).toBe('Login to access the full dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('returns the expected notification string', () => {
      expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
    });
  });
});
