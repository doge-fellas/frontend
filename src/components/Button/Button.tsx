import React, { ReactChild } from 'react';
import s from './button.module.css';

interface IPropTypes {
  children: ReactChild;
  [key: string]: any;
}

const Button: React.FC<IPropTypes> = React.memo(({ children, ...props }) => {
  return (
    <button {...props} className={`${s.button} ${props.className}`}>
      {children}
    </button>
  );
});

export default Button;
