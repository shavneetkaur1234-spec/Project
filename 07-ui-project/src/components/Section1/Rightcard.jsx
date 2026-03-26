import React from 'react'
import {ArrowRight} from 'lucide-react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-55 bg-red-500 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt=""></img>

        <Rightcardcontent 
        tag={props.tag}
        id={props.id}/>

        </div>
  )
}

export default Rightcard
