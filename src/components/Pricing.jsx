import React from 'react'
import { pricingOptions } from '../constants'
import { Check, CheckCircle2 } from 'lucide-react'


const Pricing = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide'>Pricing</h2>
      <div className='flex flex-wrap items-stretch'>
        {pricingOptions.map((item, index) =>(
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 mt-10'>
          <div className=' border border-neutral-500 rounded-xl p-10'>

            <div className=' text-3xl sm:text-2xl lg:text-4xl py-4'>
            {item.title}
            {item.title === "Pro" && (
              <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-lg'>(Most Popular)</span>
            )}
            </div>
            <div className='text-3xl py-4'>
              {item.price}
              <span className='text-lg text-neutral-500 tracking-tight'>/month</span>
            </div>
            <ul className='py-4'>
              {item.features.map((feature, index) => (
                <li key={index} className='text-lg flex items-center my-6'>
                  <CheckCircle2/>
                  <span className='ml-2'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a href="#" className=' inline-flex justify-center items-center w-full h-12 mt-4 border border-purple-600 rounded-lg hover:bg-purple-800 transition duration-200'>Subscribe</a>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
