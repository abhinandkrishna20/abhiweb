import React from 'react'

const Header = () => {
  return (
    <div className=' justify-center items-center' >
       <div class="text-xl flex text-center items-center w-fit
 rounded-full        font-bold  p-1 m-2 border-2 bg-blue-100 border-amber-100  rounded-xl">
   <a href="/" className="p-2 m-2">Home</a>
   <a href="/about" className="p-2 m-2">About</a>
   <a href="/projects" className="p-2 m-2">Projects</a>
   <a href="/contact" className="p-2 m-2">Contact</a>
  </div>
    </div>
  )
}

export default Header