import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Example = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Example;