import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-600 flex justify-between items-center text-white px-2 '>
        <div className='font-bold text-2xl '>
            URLer
        </div>
      <ul className='flex justify-center items-center gap-4'>
        <Link href="/"> <li>Home</li></Link>
        <Link href="/about"> <li>About</li></Link>
        <Link href="/generate"> <li>Shorten</li></Link>
        <Link href="/contact"> <li>Contact us</li></Link>
        <li className='flex gap-3'>
        <Link href="/generate"><button className='bg-purple-400 shadow-lg rounded-md px-1'>Try Now</button></Link>
        <Link href="/about"><button className='bg-purple-400 shadow-lg rounded-md px-1'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
