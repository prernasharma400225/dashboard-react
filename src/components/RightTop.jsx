import React from 'react'
import { LuSearch } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";

const RightTop = () => {
  return (
    
      <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2 bg-[#1e1524cf] pr-10 pl-2 py-2 rounded text-gray-500'>
               <LuSearch  />
              <input className='text-xs' type="search" placeholder='search for films, directors, or actors...' />
            </div>
              <div className='flex items-center gap-2'>
                <div className='h-8 w-8 rounded-full text-white bg-[#1e1524cf]  flex items-center justify-center'> <FaBell /></div>
                <div className='h-10 w-10 overflow-hidden rounded-full'><img className='object-cover  object-top' src="../public/profile.jpg" alt="" /></div>
              </div>
            </div>
   
  )
}

export default RightTop
