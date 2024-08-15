import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t border-neutral-400 py-10'>
      <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
          <h5 className='text-md font-semibold mb-4'>Resource</h5>
          <ul className='space-y-2'>
            {resourcesLinks.map((resource, index) => (
              <li key={index} className='my-2 text-sm text-neutral-400 hover:text-white'>
                <a href={resource.href} target="_blank">{resource.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className='text-md font-semibold mb-4'>Platforms</h5>
          <ul className='space-y-2'>
            {platformLinks.map((platform, index) => (
              <li key={index} className='my-2 text-sm text-neutral-400 hover:text-white'>
                <a href={platform.href} target="_blank">{platform.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className='text-md font-semibold mb-4'>Community</h5>
          <ul className='space-y-2'>
            {communityLinks.map((community, index) => (
              <li key={index} className='my-2 text-sm text-neutral-400 hover:text-white'>
                <a href={community.href} target="_blank">{community.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
