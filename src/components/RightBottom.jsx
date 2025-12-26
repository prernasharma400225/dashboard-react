import React from 'react'

const RightBottom = () => {
    const card = [
    {
      img: '../public/images1.jpg',
      title: 'Midnight Mischief Squad',
      sec: 'S1,Ep-3',
      time:'30mins 55sec'
    },
    {
      img: '../public/images2.jpg',
      title: 'Legend of the emeraid Mist',
      sec: 'S2,Ep-1',
      time:'35mins 45sec'
    },
    {
      img: '../public/images3.jpg',
      sec: 'S3,Ep-2',
      time:'35mins 05sec'
    },
    {
      img: '../public/image4.avif',
      title: 'Midnight Mischief Squad',
      sec: 'S1,Ep-3',
      time:'30mins 55sec'
    },
    {
      img: '../public/images5.jpg',
      title: 'Legend of the emeraid Mist',
      sec: 'S2,Ep-1',
      time:'35mins 45sec'
    },
   
  ]
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <h1 className='text-gray-300'>Continue Watching</h1>
          <button className='bg-[#80808051] px-3 rounded-[7px] text-gray-300 text-xs py-1'> See All</button>
        </div>
        <div id='card' className=' flex-nowrap card flex gap-2 overflow-x-auto  '>
    {card.map((elem) =>{
              return (
          <div className='shrink-0 relative w-64 h-36 rounded-xl  overflow-hidden overflow-x-auto'>

            
           <img className='absolute w-full h-full object-cover'  src={elem.img} alt="" />

                <div className='absolute w-full p-2 bottom-0 text-gray-300 flex flex-col justify-end '> 
                  <h1 className='font-bold'>{elem.title}</h1>

                <div className='flex flex-row text-xs font-semibold py-2 justify-between '><p>{elem.sec}</p><p>{elem.time}</p>

                </div>

                <div className='border border-[#80808051] w-full'> <div className='border-2 border-[#7f0e87eb] w-1/2'></div></div>

                </div>
            
          </div>

           )
            })}
        </div>
      </div>
  )
}

export default RightBottom
