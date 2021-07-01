import { Box, Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Modal';
import React from 'react';

export default function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const setAuth = () => {
    const sessionStorage = window.sessionStorage;
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
  };

  return (
    <Dialog open>
      <Paper style={{ width: 'max-content', margin: 'auto', marginTop: '10em', padding: '3em' }}>
        <form noValidate autoComplete="off">
          <Box p={2}>
            <TextField
              label="Username"
              style={{ width: '400px' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>

          <Box p={2}>
            <TextField
              label="Password"
              style={{ width: '400px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Box>
        </form>
        <Button color="secondary" type="submit" onClick={() => setAuth()}>
          LOG IN
        </Button>
      </Paper>
    </Dialog>
  );
}
