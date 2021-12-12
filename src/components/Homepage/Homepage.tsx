import React from 'react';
import s from '../../app.module.css';
import ConnectWalletSide from '../ConnectWalletSide/ConnectWalletSide';
import MintNowSide from '../MintNowSide/MintNowSide';
import AboutItem from '../AboutItem/AboutItem';
import bottomImage from '../../utilities/images/bottom_image.png';

const Homepage: React.FC = () => {
  return (
    <div className={s.main}>
      <div className={s.top__content}>
        <ConnectWalletSide/>
        <MintNowSide/>
      </div>
      <div className={s.bottom_content}>
        <AboutItem
          title={'use case'}
          content={
            'You can trade nfts on our marketplace or use them to play the upcoming game SHAKEDOWN'
          }
        />
        <AboutItem
          title={'how much?'}
          content={
            'The starting price will be 3000 Fellas or about 100 dollars at launch'
          }
        />
        <AboutItem
          title={'how many?'}
          content={'the upper limit on the Genesis NFTs 5000'}
        />
      </div>
      <div className={s.footer}>
        <img
          src={bottomImage}
          className={s.footer__image}
          alt={'dogefellas_footer_image'}
        />
        <small className={s.footer_small}>
          TRADE WITH CAUTION. DON'T BE A RAT!
        </small>
      </div>
    </div>
  );
};

export default Homepage;