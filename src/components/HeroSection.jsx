import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className=' text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center'>
          VirtulaR build tools{" "} 
          <span className='bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text'>
          for developers
          </span>
        </h1>
        <p className=' mt-10 text-lg text-center text-neutral-400 max-w-4xl'>
          Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imaginaiton into immersive reality.
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md'> 
            start for free
          </a>
          <a href="#" className='py-3 px-4 mx-3 border rounded-md'>
            Documentation
          </a>
        </div>
        <div className='flex justify-center mt-10'>
          <video autoPlay loop muted className='border border-purple-400 rounded-lg w-1/2 shadow-purple-400 mx-2 my-4'><source src={video1} type='video/mp4' />
          Your browser does not support the video.
          </video>
          <video autoPlay loop muted className='border border-purple-400 rounded-lg w-1/2 shadow-purple-400 mx-2 my-4'><source src={video2} type='video/mp4' />
          Your browser does not support the video.
          </video>
        </div>
      </div>

    </>
  )
}

export default HeroSection
