import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What People are Saying</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) =>(
          <div key={index} className='w-full lg:w-1/3 sm:w-1/2 px-4 py-2'>
            <div className='bg-neutral border border-neutral-600 rounded-md font-thin p-6'>
              <p>{testimonial.text}</p>
              <div className='flex items-start mt-8'>
                <img src={testimonial.image} alt={testimonial.user} className=' rounded-full w-12 h-12 mr-6 border border-purple-400'/>
                <div>
                  <h5 className='text-lg '>{testimonial.user}</h5>
                  <p className='text-sm italic text-neutral-400'>{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div> 
        ))}

      </div>
    </div>
  )
}

export default Testimonials
