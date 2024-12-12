import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'> Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                It is important for the customer to pay attention to the customer's needs.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-indigo-300 text-3xl sm:text-4xl'>
                    <div className='space-y-2 '>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        <h3 data-aos="zoom-in-up">remix.js</h3>
                        <h4 data-aos="zoom-in-up">React.js</h4>
                    </div>
                    <div className='space-y-2 '>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h3 data-aos="zoom-in-up">CSS</h3>
                        <h4 data-aos="zoom-in-up">Node.js</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
