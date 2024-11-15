// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import logo from './assets/Logo.png'; // Import your logo

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/stock-predictor');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/stock-predictor');
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
          <img src={logo} alt="Craft Trade Logo" style={{ width: '100px', height: '100px' }} />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleGoogleLogin}
          >
            Sign In with Google
          </Button>
          <Button
            color="primary"
            onClick={() => navigate('/signup')}
            sx={{ mt: 2 }}
          >
            Don't have an account? Sign up
          </Button>
          <Button
            color="secondary"
            onClick={() => navigate('/forgot-password')}
            sx={{ mt: 1 }}
          >
            Forgot Password?
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
