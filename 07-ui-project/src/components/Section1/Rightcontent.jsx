import React from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props,idx) => {
  return (
    <div id='right' className='h-full w-2/3  p-6 flex flex-nowrap gap-5 overflow-x-auto rounded-2xl'>

     {props.users.map(function(elem,idx){
      return <Rightcard  
      key={idx}
      id={idx}
      img={elem.img}
      tag={elem.tag}
      />
     })}
    </div>
  )
}

export default Rightcontent
