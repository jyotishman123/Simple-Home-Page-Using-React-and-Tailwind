import React from 'react'

export default function 
Content() {
  return (

    <div className='py-14 px-16 my-7 w-full '>
        <p className='text-center font-bold text-2xl my-2 text-blue-800'>Specification</p>
        <div className='w-[80%] mx-auto md:flex justify-center rounded-2xl'>
             <div className='border-2 border-slate-500 mx-2  basis-1/3 text-center py-12 my-3 bg-white  drop-shadow-lg'>
                <h1 className='text-5xl  font-bold text-blue-800 py-2'>80%</h1>
                <p className='text-2xl font-semibold text-gray-500'>HTML</p>
             </div>
             <div className='border-2 border-slate-500 mx-2 basis-1/3 text-center py-12 my-3 bg-white drop-shadow-lg'>
                <h1 className='text-5xl  font-bold text-blue-800 py-2'>70%</h1>
                <p className='text-2xl font-semibold text-gray-500'>CSS</p>
             </div>
             <div className='border-2 border-slate-500 mx-2 basis-1/3 text-center py-12 my-3 bg-white drop-shadow-lg'>
                <h1 className='text-5xl  font-bold text-blue-800 py-2'>60%</h1>
                <p className='text-2xl font-semibold text-gray-500'>JS</p>
             </div>
        </div>
    </div>
  )
}
