import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useTheme,
  Button,
} from '@mui/material';
import styles from './header.styles';

export default function Header() {
  const theme = useTheme();
  const s = styles(theme);

  return (
    <AppBar sx={{ height: '60px' }}>
      <Toolbar sx={s.toolbar}>
        <Typography>bee.ly</Typography>
        <Box sx={{ px: 4, py: 3 }}>
          <Button variant="outlined">Log in</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
