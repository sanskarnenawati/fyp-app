import React, { useEffect } from 'react';
import StockPredictor from './StockPredictor.js';
import { pingServer } from './api.js';

function App() {
  useEffect(() => {
    const checkServer = async () => {
      try {
        await pingServer();
        console.log("Server is up!");
      } catch {
        console.error("Server is down!");
      }
    };
    checkServer();
  }, []);

  return (
    <div className="App">
      <StockPredictor />
    </div>
  );
}

export default App;
