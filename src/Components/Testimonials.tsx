import React from 'react'
import Heading from './Heading'
import TestimonialCard from './TestimonialCard'
const TestimonialsData=[
{
    companyName: "Instagram",
    desc: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all",
    img: "/insta.jpg",
    name: "Kiran Khan",
    designation: "Marketing Executive",
},
{
    companyName: "Facebook",
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    img: "/fb.jpg",
    name: "Ayesha Khan",
    designation: "Senior Engineering Manager",
},
{
    companyName: "Linkedin",
    desc: "I just wanted to let you know that it’s been great working with you",
    img: "/linkedin.jpg",
    name: "Maryam Mughal",
    designation: "Engineering Manager",
},

]
const Testimonials = () => {
  return (
    <div className='container pt-32'>
        <Heading title="Testmonials"/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-7 '>
            {TestimonialsData.map((item, index) => (
            <TestimonialCard 
            companyName={item.companyName} 
            desc={item.desc} 
            img={item.img} 
            name={item.name} 
            designation={item.designation} 
            />
            ))}
        </div>
  </div>

)
}

export default Testimonials
