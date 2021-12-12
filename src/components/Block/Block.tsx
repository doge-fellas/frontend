import React, { ReactChild } from 'react';
import s from './block.module.css'

interface IProps {
  children: ReactChild
}

const Block:React.FC<IProps> = React.memo(({children}) => {
  return (
    <div className={s.block}>
      {children}
    </div>
  )
})

export default Block