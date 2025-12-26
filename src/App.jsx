import React from 'react'
import Left from './components/Left'
import Right from './components/Right'


const App = () => {
  return (
    <div className='flex flex-row gap-2 p-2 bg-[#150720]'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
