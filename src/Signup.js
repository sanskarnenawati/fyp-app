// // src/components/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider } from '../firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   Container,
//   Paper,
// } from '@mui/material';
// import logo from '../assets/Logo.png'; // Import your logo

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('Signup failed. Please try again.');
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Google signup error:', error);
//       alert('Google signup failed. Please try again.');
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
//         <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
//           <img src={logo} alt="Craft Trade Logo" style={{ width: '100px', height: '100px' }} />
//         </Box>
//         <Typography variant="h5" align="center" gutterBottom>
//           Sign Up
//         </Typography>
//         <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//             onClick={handleSignup}
//           >
//             Sign Up
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             fullWidth
//             sx={{ mt: 2 }}
//             onClick={handleGoogleSignup}
//           >
//             Sign Up with Google
//           </Button>
//           <Button
//             color="primary"
//             onClick={() => navigate('/')}
//             sx={{ mt: 2 }}
//           >
//             Already have an account? Login
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default Signup;
// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import logo from './assets/Logo.png'; // Import your logo

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google signup error:', error);
      alert('Google signup failed. Please try again.');
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e1e1e, #3d3d3d)', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: '#ffffff',
      padding: '20px'
    }}>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px' }}>
          <Box display="flex" justifyContent="center" sx={{ mb: 3 }}>
            <img src={logo} alt="Craft Trade Logo" style={{ width: '100px', height: '100px' }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: '#ffffff' },
                label: { color: '#b0b0b0' },
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6200ea',
                },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: '#ffffff' },
                label: { color: '#b0b0b0' },
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6200ea',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ 
                mt: 2, 
                padding: '10px 20px', 
                backgroundColor: '#6200ea',
                '&:hover': { backgroundColor: '#3700b3' }
              }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ 
                mt: 2, 
                padding: '10px 20px', 
                borderColor: '#6200ea',
                color: '#6200ea',
                '&:hover': { backgroundColor: 'rgba(98, 0, 234, 0.2)' }
              }}
              onClick={handleGoogleSignup}
            >
              Sign Up with Google
            </Button>
            <Typography align="center" sx={{ mt: 2, fontSize: '0.9rem' }}>
              <Button color="secondary" onClick={() => navigate('/')} sx={{ textTransform: 'none', color: '#ffffff' }}>
                Already have an account? Login
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Signup;
