/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'helpers/emotion';
import Header from 'components/header/Header';
import Cookies from 'universal-cookie';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { baseTheme, darkPalette, lightPalette } from 'styles/theme';
import AppContext from 'context';

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const setSnackbar = (open, message, type) => {
    setContext(ctx => ({
      ...ctx,
      snackbar: { open, message, type },
    }));
  };

  const triggerSnackbarSuccess = message => {
    setSnackbar(true, message, 'success');
  };

  const triggerSnackbarError = message => {
    setSnackbar(true, message, 'error');
  };

  const triggerSnackbarWarning = message => {
    setSnackbar(true, message, 'warning');
  };

  const [context, setContext] = useState({
    ...pageProps,
  });

  useEffect(() => {
    setContext(pageProps);
  }, [pageProps]);

  const cookies = new Cookies();

  const { prefs } = pageProps;

  const [theme, setTheme] = useState(prefs?.theme || 'dark');
  const palette = theme === 'dark' ? darkPalette : lightPalette;

  const currentTheme = createTheme({ ...baseTheme, palette });

  const toggleTheme = () => {
    const newVal = theme === 'dark' ? 'light' : 'dark';
    setTheme(newVal);
    cookies.set('theme', newVal);
  };

  return (
    <AppContext.Provider
      value={{
        content: {},
        ...context,
        setContext,
        setSnackbar,
        triggerSnackbarSuccess,
        triggerSnackbarError,
        triggerSnackbarWarning,
        theme,
        toggleTheme,
      }}
    >
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </AppContext.Provider>
  );
}
