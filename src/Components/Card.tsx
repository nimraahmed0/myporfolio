import Image from 'next/image';
import React from 'react'


interface propsType{
    title:string;
    desc : string;
    img:string;
    tags:string[];

}

const Card :React.FC<propsType>= ({title,desc,img,tags}) => {
  return (
    <div className='border border-indigo-300 w-[30px] sm:w-[350px] rounded-lg'data-aos="zoom-in-up">
        <div>
            <Image className='w-[300px] sm:w-[350px] h-auto'
            src={img}
            width={350}
            height={350}
            alt={title}   
            />
        </div> 

        <div className='p-5 space-x-1'>
            <div className='text-2xl font-bold space-x-10'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) =>(
                    <div className='tags key = {el}'>
                        {el}
                    </div>
                ))}
            </div>
        </div>



    </div> )  ;  
};


export default Card;
