import React from 'react'
import { FiDownload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const RightMiddle = () => {
  return (
    <div className='relative h-80 w-full'>
              <img className='absolute w-full h-full  rounded-2xl   object-cover' src="../public/bg-image.jpg" alt="" />
    
              <div className='absolute p-5 h-full  text-white flex flex-col justify-between'>
                <h3 className='bg-[#80808051] w-fit py-1 px-3 rounded-full border border-gray-600'>🔥Now Trending</h3>
    
                <div>
                  <div className='flex gap-4' >
                  <button className='bg-[#80808051] px-3 rounded-full border border-gray-600'>Drama</button>
                  <button className='bg-[#80808051] px-3 rounded-full border border-gray-600'>Fantasy</button>
                </div>
                <h1 className='text-4xl leading-9'>Dimensional Kids on <br /> an Adventure</h1>
                <p className='text-xs pt-2'> When two curious kids stumble into a hidden portal, they travel <br /> across magical dimensions while trying to find their way home.....</p>
                </div>
    
    
                <div className='flex gap-3' > 
                  <button className='flex items-center bg-purple-400 p-2 rounded-[7px] gap-2'><FaPlay /><h3>Watch Now</h3></button>
                  <button className='bg-[#80808051] py-2 px-3 rounded-[7px]' ><FiDownload /></button > 
                  <button className='bg-[#80808051] py-2 px-3 rounded-[7px]'><BsThreeDots /></button>
                  </div>
              </div>
          </div>
  )
}

export default RightMiddle
