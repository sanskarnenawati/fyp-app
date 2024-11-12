const React = require('react');
const { useEffect } = React;
const StockPredictor = require('./StockPredictor.mjs');
const { pingServer } = require('./api.mjs');

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

module.exports = App;
