import React, { ReactChild } from 'react';
import s from './block.module.css'

interface IProps {
  children: ReactChild
  [key:string]: any
}

const Block:React.FC<IProps> = React.memo(({children, ...props}) => {
  return (
    <div {...props} className={`${s.block} ${props.className}`}>
      {children}
    </div>
  )
})

export default Block