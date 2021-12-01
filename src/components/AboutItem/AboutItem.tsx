import React from 'react';
import s from './aboutItem.module.css';

interface IProps {
  title: string;
  content: string;
}

const AboutItem: React.FC<IProps> = React.memo(({ title, content }) => {
  return (
    <div className={s.about__item}>
      <h3 className={s.item__title}>{title}</h3>
      <p className={s.item__content}>{content}</p>
    </div>
  );
});

export default AboutItem;
