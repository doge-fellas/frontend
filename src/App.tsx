import React from 'react';
import s from './app.module.css';
import ConnectWalletSide from './components/ConnectWalletSide/ConnectWalletSide';
import MintNowSide from './components/MintNowSide/MintNowSide';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={s.app}>
      <Navbar />
      <main className={s.main}>
        <div className={s.top__content}>
          <ConnectWalletSide />
          <MintNowSide />
        </div>
      </main>
    </div>
  );
}

export default App;
