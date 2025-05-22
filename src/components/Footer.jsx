import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-blue-50 w-full p-3  text-blue-50 '>
      <div className='items-baseline-last justify-center'>
        All rights reserver @ Abhinand Krishna
      </div>
      <div className='flex items-center justify-center-safe'>
        <div className='text-blue-50 hover:text-green-400 px-3'><a href=""> Facebook </a></div>
        
        <div className='text-blue-50 hover:text-green-400  px-3'><a href=""> Twitter </a></div>
        
        <div className='text-blue-50 hover:text-green-400  px-3'><a href=""> Instagram </a></div>

      </div>

    </div>
  )
}

export default Footer