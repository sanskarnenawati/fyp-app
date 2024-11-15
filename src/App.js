// import React, { useEffect } from 'react';
// import StockPredictor from './StockPredictor.js';
// import { pingServer } from './api.js';

// function App() {
//   useEffect(() => {
//     const checkServer = async () => {
//       try {
//         await pingServer();
//       } catch {
//         console.error("Server is down!");
//       }
//     };
//     checkServer();
//   }, []);

//   return (
//     <div className="App">
//       <StockPredictor />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockPredictor from './StockPredictor.js';
import { pingServer } from './api.js';
import Login from './Login.js';
import Signup from './Signup.js';
// import Dashboard from './';

import ForgotPassword from './ForgotPassword.js';

function App() {
  useEffect(() => {
    const checkServer = async () => {
      try {
        await pingServer();
      } catch {
        console.error("Server is down!");
      }
    };
    checkServer();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Include the Stock Predictor directly in the Dashboard or as a standalone route */}
          <Route path="/stock-predictor" element={<StockPredictor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
