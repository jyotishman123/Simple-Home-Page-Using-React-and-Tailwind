import React from 'react';
// import Supports from "../assets/support.jpg"
import { PhoneIcon, ArrowSmRightIcon,AcademicCapIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from "@heroicons/react/solid"

export default function Support() {
  return (
    <div className='w-full  relative '>
          <div className='bg-slate-300 rounded-lg  drop-shadow-lg'>
<h1 className='sm:text-4xl text-center text-blue-700 font-bold py-3'>Supports</h1>
 <p className='text-center md:text-2xl py-2'>Get free and easy support team accros the globe</p>

<div className='flex justify-center flex-wrap sm:flex-row flex-col'> 

   <div className='py-8 my-8 px-4 mx-4 rounded-lg drop-shadow-2xl  basis-1/3 bg-white'>
     <ChipIcon className='sm:w-14 w-10 text-blue-700'/>
     <h1 className='sm:text-3xl font-bold my-3'>Technical Support</h1>
     <p className ='my-3 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure eos tempore nobis voluptatum cum!</p>
     <div className='flex items-center   my-3'> 
     <h1 className='font-bold'>Contact</h1><ArrowSmRightIcon className='w-5 translate-y-0.5 mx-2'/>
     </div>
   </div>

   <div className='py-8 my-8 px-4 mx-4 basis-1/3 rounded-lg drop-shadow-2xl   bg-white'>
     <PhoneIcon className='sm:w-14 w-10 text-blue-700'/>
     <h1 className='sm:text-3xl font-bold my-3'>Technical Support</h1>
     <p className='my-3 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure eos tempore nobis voluptatum cum!</p>
     <div className='flex items-center   my-3'> 
     <h1 className='font-bold'>Contact</h1><ArrowSmRightIcon className='w-5 translate-y-0.5 mx-2'/>
     </div>
   </div>

   <div className='py-8 my-8 px-4 mx-4 basis-1/3 rounded-lg drop-shadow-2xl   bg-white'>
     <AcademicCapIcon className='sm:w-14 w-10 text-blue-700'/>
     <h1 className='sm:text-3xl font-bold my-3'>Technical Support</h1>
     <p className='my-3 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure eos tempore nobis voluptatum cum!</p>
     <div className='flex items-center   my-3'> 
     <h1 className='font-bold'>Contact</h1><ArrowSmRightIcon className='w-5 translate-y-0.5 mx-2'/>
     </div>
   </div>


</div>

          </div>
        </div>
  )
}
