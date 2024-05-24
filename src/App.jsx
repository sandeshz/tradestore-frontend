import React, { useState } from 'react';  
import TradeStore from './component/TradeStore.jsx';
import AllTrades from './component/AllTrades.jsx';

function App() {

  const [showTradeStore, setShowTradeStore] = useState(false);
  const [showAllTrades, setShowAllTrades] = useState(false);

  const handleTradeSearchClick = () => {
    setShowTradeStore(true);
    setShowAllTrades(false);
  };

  const handleShowAllTradesClick = () => {
    setShowTradeStore(false);
    setShowAllTrades(true);
  };

  const handleCreateTradesClick = () => {
    setShowTradeStore(false);
    setShowAllTrades(true);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleTradeSearchClick}>Search Trade by Id</button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleShowAllTradesClick}>Display All Trades</button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleCreateTradesClick}>Create Trade</button>
      </div>
      {showTradeStore && <TradeStore />}
      {showAllTrades && <AllTrades />}
    </div>
  )
}

export default App;
