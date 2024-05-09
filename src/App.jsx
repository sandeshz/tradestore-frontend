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

  return (
    <div>
      <button onClick={handleTradeSearchClick}>Search Trade</button>
      <button onClick={handleShowAllTradesClick}>Display All Trades</button>

      {showTradeStore && <TradeStore />}
      {showAllTrades && <AllTrades />}
    </div>
  )
}

export default App;
