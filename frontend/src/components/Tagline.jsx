import React from 'react'


const Tagline = (props) => {
  return (
    <div className='flex '>
      <div className=' w-[50%] ml-40 mr-40 h-70 text-7xl'>
      <p>{props.text}</p>
    </div>
    <div className=' w-[40%] ml-20 h-100'>
      <img src={props.image}  className='h-68'/>
  </div>
    </div>
  )
}

export default Tagline