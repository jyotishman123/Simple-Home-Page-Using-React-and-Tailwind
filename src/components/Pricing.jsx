import React from 'react'

export default function 
() {
  return (
    <div className='w-full my-8 py-14 px-16'>
        <h1 className='sm:text-4xl text-center text-blue-700 font-bold py-4'>Pricing</h1>
         <h2 className='text-2xl font-semibold my-3 text-center'>Check Our Price</h2>

   <div className='flex  md:flex-row flex-col flex-wrap  justify-between'>

    <div className='my-16 border-2 border-blue-500 text-center drop-shadow-2xl rounded-md basis-1/4 py-3'>

       <div>
        <h1 className='text-4xl text-blue-800 font-bold'>$0/</h1>
        <p className='my-2 py-2'>Start Free</p>
        <ul>
            <li className='my-2 py-1 font-semibold text-md'>Four Page Website</li>
            <li className='my-2 py-1 font-semibold text-md'>Simple FrontEnd</li>
            <li className='my-2 py-1 font-semibold text-md'>No use of Library</li>
            <li className='my-2 py-1 font-semibold text-md'>No Backend</li>
            <button className='  rounded-lg font-semibold bg-blue-700 text-white py-1 px-4'>Start</button>
        </ul>
       </div>
    </div>

    <div className='my-16 border-2 border-blue-500 text-center drop-shadow-2xl rounded-md basis-1/4 py-3'>
       <div>
        <h1 className='text-4xl text-blue-800 font-bold'>$49/</h1>
        <p className='my-2 py-2'>Start Free</p>
        <ul>
            <li className='my-2 py-1 font-semibold text-md'>Custom Page Website</li>
            <li className='my-2 py-1 font-semibold text-md'>Animated FrontEnd</li>
            <li className='my-2 py-1 font-semibold text-md'>React & Tailwind </li>
            <li className='my-2 py-1 font-semibold text-md'>Fire Base</li>
            <button className='  rounded-lg font-semibold bg-blue-700 text-white py-1 px-4'>Start</button>
        </ul>
       </div>
    </div>

    <div className='my-16 border-2 border-blue-500 text-center drop-shadow-2xl rounded-md basis-1/4 py-3'>
       <div>
        <h1 className='text-4xl text-blue-800 font-bold'>$99/</h1>
        <p className='my-2 py-2'>Start Free</p>
        <ul>
            <li className='my-2 py-1 font-semibold text-md'>Unlimeted Page Website</li>
            <li className='my-2 py-1 font-semibold text-md'>Full Backend System</li>
            <li className='my-2 py-1 font-semibold text-md'>MERN Stact</li>
            <li className='my-2 py-1 font-semibold text-md'>No SQL & SQL database</li>
            <button className='  rounded-lg font-semibold bg-blue-700 text-white py-1 px-4'>Start</button>
        </ul>
       </div>
    </div>


   </div>

    </div>
  )
}
