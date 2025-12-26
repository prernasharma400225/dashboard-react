import React from 'react'
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { GoHomeFill } from "react-icons/go";
import { FaGgCircle } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";

const Left = () => {

  const firstMenu = [
    {
      icon : <GoHomeFill />,
      label: 'Home'
    },
    {
      icon :<FaGgCircle />,
      label:'Explore'
    },
    {
      icon : <BsDatabase />,
      label:'Genres'
    },
    {
      icon : <FaBookmark />,
      label: 'Favourites'
    }
  ];

  const secondMenu = [
    {
      icon : <FaPlay />,
      label:'Continue Watching'
    },
    {
      icon :<IoMdTime /> ,
      label:'Recently Added'
    },
    {
      icon : <FaFileAlt />,
      label: 'My Collection'
    },
    {
      icon : <LuDownload />,
      label: 'Downloads'
    }
  ]
  return (
    <div className='left w-1/6 h-screen bg-[#1e1524cf]  flex flex-col justify-between items-start p-2 text-[#a9a8a8] border rounded-2xl border-gray-600'>
      <div  className='flex flex-col gap-8 w-full '>
        <div className='flex justify-between  text-xl items-center'>
        <div className='flex items-center gap-1 '><TbDeviceTvOldFilled /><h1>Drameeo</h1></div>
        <MdMenuOpen />
      </div>
      <div className='border-b pb-4 border-gray-600 flex flex-col gap-5 text-xs'>
        {firstMenu.map((elem)=>{
          return (
            <div className='flex items-center gap-2'>
            {elem.icon}<h3>{elem.label}</h3>
          </div>
          )
        })}
      </div>
      <div className='border-b pb-4 border-gray-600 flex flex-col gap-5 text-xs'>
        {secondMenu.map((item) =>{
          return(
            <div className='flex items-center gap-2'>{item.icon}<h3>{item.label}</h3></div>
          )
        })}
          
          
      </div>


        <div  className='flex items-center gap-2 text-xs'><IoSettings /><h3>Setting</h3></div>
      </div>
      <div  className='flex items-center gap-2 text-xs'>
        <FiLogOut /><h1>Logout</h1>

      </div>
    </div>
  )
}

export default Left
