import React from 'react'

const Footer = () => {
  const twitter='https://twitter.com'
  return (
    <div className='sticky p-3 px-5 bg-black w-full text-white flex justify-between items-center'>
      <h1 className='hover:cursor-pointer'>Copyright@2021</h1>
      <ul className='flex flex-row justify ' >
        <li className=''><a className=' px-2' href={twitter}>Twitter</a></li>
        <li><a className='text-white px-2' href={twitter}>Linkedin</a></li>
        <li><a className='text-white' href={twitter}>Facebook</a></li>
      </ul>

      <div>
        <input className='p-1 border-none  focus:outline-none text-black pl-2' type="text" placeholder='Enter Your Mail' />
        <button className='border p-1 border-none bg-gray-700 px-2 rounded-r-md'>SUBSCRIBE</button>
      </div>
    </div>

  )
}

export default Footer