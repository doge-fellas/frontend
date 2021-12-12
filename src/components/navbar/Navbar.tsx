import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './navbar.module.css';

const Navbar: React.FC = React.memo(() => {
  const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);

  return (
    <nav className={`${s.nav} ${isBurgerOpened ? s.open : ''}`}>
      <ul className={`${s.nav__items}`}>
        <div className={s.nav__permanent}>
          <li className={s.nav__item}>
            <Link to={'/'}> HOME </Link>
          </li>
          <button
            onClick={() => setIsBurgerOpened(!isBurgerOpened)}
            className={`${s.nav__item} ${s.menu_toggle} ${
              isBurgerOpened && s.is_active
            }`}
          >
            Menu
          </button>
        </div>

        <div
          className={`${s.burger} ${isBurgerOpened ? s.open : ''}  ${
            isBurgerOpened ? s.openAnimOn : ''
          }`}
        >
          <li className={s.burger__item}>MARKETPLACE</li>
          <li className={s.burger__item}>
            {' '}
            <Link to={'/presale'}>PRESALE</Link>{' '}
          </li>
          <li className={s.burger__item}>SHAKEDOWN</li>
          <li className={s.burger__item}>BUY $FELLAS</li>
        </div>
      </ul>
    </nav>
  );
});

export default Navbar;
