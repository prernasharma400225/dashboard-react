import React from 'react'

const RightBottom = () => {
    const card = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMypDNwL4o1su-qj_qdREBcQmEFKTQLwJOLw&s',
      title: 'Midnight Mischief Squad',
      sec: 'S1,Ep-3',
      time:'30mins 55sec'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRZnyjHnp9nl7aFYaN-PYxpSdXl4bmRYgTQ&s',
      title: 'Legend of the emeraid Mist',
      sec: 'S2,Ep-1',
      time:'35mins 45sec'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwyrsGpGcqyYUc4tSK-yg7h-QqWlQTYKLLw&s',
      sec: 'S3,Ep-2',
      time:'35mins 05sec'
    },
    {
      img: 'https://img.freepik.com/fotos-premium/jornada-intergalactica-com-um-elenco-de-adoraveis-astronomos-de-desenhos-animados_916191-79911.jpg?w=360',
      title: 'Midnight Mischief Squad',
      sec: 'S1,Ep-3',
      time:'30mins 55sec'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cN9dEZ8voJllGadJuL3a-CbkbN7Jc3HIIg&s',
      title: 'Legend of the emeraid Mist',
      sec: 'S2,Ep-1',
      time:'35mins 45sec'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMypDNwL4o1su-qj_qdREBcQmEFKTQLwJOLw&s',
      title: 'Rise of the Last Guardian',
      sec: 'S3,Ep-2',
      time:'35mins 05sec'
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
