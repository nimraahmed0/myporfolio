import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-[url()] lg:bg-[url(/banner.bg.jpg)] min-h-screen bg-cover'>
       
        <div className='container grid lg:grid-cols-2 has-[calc(100vh-60px)]:'>
            <div className='hidden lg:block'></div>
            <div className='text-[100px] sm:text-[100px] font-bold leading-tight flex justify-center items-center 
            font-style: italic '>
            <div>
            <p data-aos="zoom-in-up">Hello</p>
            <p data-aos="zoom-in-up">I'M</p>
            <p data-aos="zoom-in-up">Nimra</p>
            <p data-aos="zoom-in-up">Ahmed</p>
            <p data-aos="zoom-in-up">Web Developer</p>
            </div>   
            </div>
        </div>
    </div>
  )
}

export default Hero
