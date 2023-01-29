import React from 'react'
import MainBanner from '../assets/Main-Banner2.jpg'
import { Img } from 'react-image'

function Header() {
  return (
    <div className='flex justify-center items-center'>
      <Img
        src={MainBanner} 
        alt='Main Banner' 
        className='w-full h-64 object-cover'
      />
    </div>
  )
}

export default Header