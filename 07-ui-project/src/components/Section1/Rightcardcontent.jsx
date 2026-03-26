import React from 'react'
import {ArrowRight} from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-start' >
            <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold '>{props.id+1}</h2>
            <p className='text-sm leading-normal text-white mt-33 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum recusandae pariatur molestiae qui ducimus repellat.</p>

            <div className='flex justify-between '>
                <button className='bg-gray-600 text-white font-medium rounded-full px-3 py-0 text-sm' >{props.tag}</button>
                <button className='bg-blue-400 text-white font-medium rounded-full px-3 py-1 text-sm'> <ArrowRight  className = 'h-3 w-5' /></button>
            </div>
    </div>
  )
}

export default Rightcardcontent
