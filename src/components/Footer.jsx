import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-300 p-4 fixed bottom-0 w-full'>
        <div className='text-center text-sm md:text-base'>
            <p className='text-gray-700'>Made with <span className='text-red-500'>&#10084;</span> by 
              <Link to='https://www.linkedin.com/in/mohamedsabry123/' className='text-blue-500'>Mohamed Sabry</Link></p>
        </div>
    </div>
  )
}

export default Footer