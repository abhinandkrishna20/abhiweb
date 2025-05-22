import React from 'react'
import hero from '../assets/hero.svg';

const About = () => {
  return (
    <div  className=' md:flex  m-2 p-3 bg-gradient-to-r from-pink-900 to-blue-900 '>
      <div className='md:w-2/4 mx-auto'>
        <div className=' border-2 text-blue-100  text-xl w-fit p-3'>Hi, Welcome to my site</div>
        <div>
          <h1 className='text-white text-7xl text-shadow-blue-100'>
            I'm Abhinand Krishna
          </h1>
          <h4 className='text-green-300 text-4xl'>
            Your Digital Partner
          </h4>
          <h6 className='text-blue-300'> Fascinated to work on new technology and projects.</h6>
        </div>
      </div>
      <div className='md:w-2/4'>
      <img src={hero} alt="Hero image" />
        </div>
    </div>
  )
}

export default About