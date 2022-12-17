import React from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import { getContext } from 'helpers/context';

export default function CustomizedSnackbar() {
  const { snackbar, setSnackbar } = getContext();

  const { open, message, type } = snackbar || {};

  const handleClose = () => {
    setSnackbar(false, message, type);
  };

  return (
    <Box
      sx={{
        width: '100%',
        '& > * + *': {
          marginTop: 3,
        },
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={type}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
