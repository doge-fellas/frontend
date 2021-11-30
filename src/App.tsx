import React from 'react';
import './App.css';
import ConnectWalletSide from './components/ConnectWalletSide/ConnectWalletSide';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ConnectWalletSide />
      </main>
    </div>
  );
}

export default App;
