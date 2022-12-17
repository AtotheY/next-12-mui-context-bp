import { Box, Typography, Button } from '@mui/material';
import { getContext } from 'helpers/context';

export default function TestPage() {
  const { testData, triggerSnackbarSuccess } = getContext();
  const { title } = testData;

  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h3">{title}</Typography>
      <Button
        variant="outlined"
        onClick={() => triggerSnackbarSuccess('Button clicked')}
      >
        Trigger success snackbar
      </Button>
    </Box>
  );
}
