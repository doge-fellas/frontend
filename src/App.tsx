import React, { Suspense } from 'react';
import s from './app.module.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';

const Presale = React.lazy(() => import('./components/Presale/Presale'))

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Navbar />
      <main className={s.content}>
        <Routes>
          <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/presale'} element={<Suspense fallback={<div>Loading...</div>}>
            <Presale/>
          </Suspense>}/>
        </Routes>
      </main>

    </div>
  );
};

export default App;
