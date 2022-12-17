import { getCookie } from 'cookies-next';

export const getCookiePrefs = async (req, res) => {
  let theme = 'dark';
  const themeCookie = getCookie('theme', { req, res });
  if (themeCookie) theme = themeCookie;
  return { prefs: { theme } };
};
