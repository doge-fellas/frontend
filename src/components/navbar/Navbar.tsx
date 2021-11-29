import React from 'react';
import s from './navbar.module.css';

const Navbar: React.FC = React.memo(() => {
  return <div className={s.hello}>Navbar</div>;
});

export default Navbar;
