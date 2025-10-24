import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6  w-2/3'>
     {props.users.map((e)=>{
      return <RightCard img={e.img} tag={e.tag}/>
     })}
    </div>
  )
}

export default RightContent
