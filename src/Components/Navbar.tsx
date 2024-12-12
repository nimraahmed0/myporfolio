import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='container  py-7 '>
        <div className='flex justify-between item-center'>
            <div className="text-xl font-extrabold">Nimra</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              
                <li className='menulink'>
                  <Link href="/">Home</Link>
                </li>
                <li className='menulink'>
                  <Link href="/project">Project</Link>
                </li>
                <li className='menulink'>
                  <Link href="/skills">Skills</Link>
                  </li>
                <li className='menulink'>
                  <Link href="/about">About</Link>
                </li>
                <li className='menulink'>
                  <Link href="/contact">Contact</Link>
                </li>
                </ul>
                <AiOutlineMenu  className='md:hidden 'size={30}/>
                 
            </div> 
    </div>
  )
}

export default Navbar
