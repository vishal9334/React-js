import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params=useParams()
    
  return (
    <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-[50px]'>
      <h1>{params.id} Courses Details</h1>
    </div>
  )
}

export default CourseDetails
