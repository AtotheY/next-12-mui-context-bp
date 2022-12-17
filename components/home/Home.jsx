'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { m } from 'helpers/sx';
import { getContext } from 'helpers/context';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import styles from './home.styles';

export default function HomePage() {
  const s = styles();
  const { theme, toggleTheme } = getContext();
  return (
    <Box sx={m(s.container, s.flexColumnCenter)}>
      <IconButton
        onClick={() => {
          toggleTheme();
        }}
        sx={s.iconContainer}
      >
        {theme === 'dark' ? (
          <LightModeIcon fontSize="large" />
        ) : (
          <NightsStayIcon fontSize="large" />
        )}
      </IconButton>
      <Typography variant="h3">Welcome to the boilerplate</Typography>
      <Typography>Next 13, Context, MUI</Typography>
      <Link
        target="_blank"
        href="https://github.com/AtotheY/next-12-mui-context-bp"
      >
        <IconButton>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
