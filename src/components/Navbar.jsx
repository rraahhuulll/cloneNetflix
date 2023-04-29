import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div className=''>
            <button className=' pr-4 text-white '>Sign in</button>
            <button className='bg-red-600 px-3 py-2 rounded text-white'>Sign out</button>
        </div>
    </div>
  )
}

export default Navbar