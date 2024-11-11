import React, { useEffect } from 'react';
import StockPredictor from './StockPredictor';
import { pingServer } from './api';

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
