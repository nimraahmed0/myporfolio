import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Calculator",
        desc: "A calculator is a device that performs arithmetic operations on numbers",
        img: "/calculator.jpg",
        tags: ["nextjs", "Node", "typescript", "CSS"],
    },
    {
        id: 1,
        title: "CountdownTimer",
        desc: "Countdown timers are virtual clocks that count down from a date or number.",
        img: "/CountDown-Timer.jpg",
        tags: ["nextjs", "Node", "typescript", "CSS"],
    },
    {
        id: 2,
        title: "To Do List",
        desc: "A to-do list is just a list of things you have to-do",
        img: "/To-Do-List.jpg",
        tags: ["nextjs", "Node", "typescript", "CSS"],
    },
]

const Project = () => {
  return (
    <div className='container pt-24'>
        <Heading title ="My Projects" />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

            {data.map((el)=>(
                <Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}/>
            ))}
        </div>
    </div>
  );
};

export default Project
