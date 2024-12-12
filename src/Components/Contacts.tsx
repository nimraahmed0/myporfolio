import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

const Contacts = () => {
  return (
    <div className='pt-32 container'>
        <div className='grid md:grid-cols-2  gap-10'>
            <div className='space-y-8'>
                <h2 className='text-6xl font-extrabold font-family: ui-monospace 'data-aos="zoom-in-up" >Get in touch</h2>
                <p className='text-indigo-300 text-[17px] pt-1 flex flex-row ' data-aos="zoom-in-up">
                    Drop me a line , give me a call, or send me a massege by submiting the form.
                </p>


<div className='flex gap-3 items-center 'data-aos="zoom-in-up">
    <AiOutlineMail size={40}/>nimraahmed901@gmail.com
    </div>
    <div className='flex gap-3 items-center 'data-aos="zoom-in-up">
    <BsTelephone size={40}/>099001990
    </div>        
                
            </div>

<div className='space-y-8'>
    <div className='flex flex-col gap-1 ' data-aos="zoom-in-up">
        <label htmlFor="name">NAME</label>
        <input 
        type='text'
        className='h-[35px] bg-black border border-indigo-300 cursor-pointer ' data-aos="zoom-in-up"
        id='name'/>
            </div>
            <div className='flex flex-col gap-1 ' data-aos="zoom-in-up">
        <label htmlFor="name">EMAIL</label>
        <input 
        type='text'
        className='h-[35px] bg-black border border-indigo-300 cursor-pointer ' data-aos="zoom-in-up"
        id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
        <label htmlFor="name">MASSEGE</label>
        <textarea 
        className='bg-black border border-indigo-300 cursor-auto ' data-aos="zoom-in-up"
        id='massege'
        rows={9}
        >

        </textarea>
            </div>
<button className='bg-indigo-400 p-3 px-7 border border-white ' data-aos="zoom-in-up"> Send</button>

          </div>
       </div>
    </div>
  );
};

export default Contacts
