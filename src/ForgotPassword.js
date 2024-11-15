// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Failed to send password reset email.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
}

export default ForgotPassword;

