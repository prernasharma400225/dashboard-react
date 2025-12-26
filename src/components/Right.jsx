import React from 'react'

import RightTop from './RightTop';
import RightMiddle from './RightMiddle';
import RightBottom from './RightBottom';

const Right = () => {

  
  return (
    <div className='w-5/6  px-5 h-screen rounded-2xl flex flex-col gap-5'>
      <RightTop/>
      <RightMiddle/>
      <RightBottom/>

      
    </div>
  )
}

export default Right
