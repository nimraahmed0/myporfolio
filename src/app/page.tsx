"use client"

import Contacts from "@/Components/Contacts";
import Hero from "@/Components/Hero";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";
import Testimonials from "@/Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

useEffect(() =>{
  AOS.init({
    easing: "ease-out-back",
    delay:100,
    duration:1200,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset: 160,


  });
  AOS.refresh();

},[])



  return (
    <main>
      <Hero />
      <Project />
      <Skills />
      <Testimonials />
      <Contacts />
    </main>
  )
    
}
