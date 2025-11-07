import React from 'react'
import '../styles/pagesStyle/Production.css'
import { Link, Outlet } from 'react-router-dom'

const Production = () => {
  return (
    <div className='flex justify-center gap-10 py-4 text-white' >
      <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
      <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
      <Link className='text-xl font-semibold' to='/product/kid'>Kid</Link>
      <Outlet/>
    </div>
  )
}

export default Production
