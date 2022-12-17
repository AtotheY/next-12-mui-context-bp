import { Box, Typography } from '@mui/material';
import { getContext } from 'helpers/context';
import { useEffect } from 'react';

export default function HomePage() {
  const { testData, setSnackbarSuccess } = getContext();
  const { title } = testData;

  useEffect(() => {
    if (title.testData) {
      setSnackbarSuccess('Test data loaded successfully');
    }
  }, [testData]);

  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
}
