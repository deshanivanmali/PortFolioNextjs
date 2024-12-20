"use client";
import React ,{useState}from "react";
import {motion} from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// icons
import { BsArrowRight,BsArrowUpRight,BsGithub,BsLink } from "react-icons/bs";
import { Tooltip ,TooltipContent,TooltipTrigger,TooltipProvider} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtn from "@/components/WorkSlideBtn";
import { Button } from "@/components/ui/button";
 
const allProjects=[
  {
    num:'01',
    category:'frontend',
    title:'Vikas Neethi',
    description:`Vikas Neethi is powered by a dedicated team of professionals committed to making a difference in governance. Our founders and team members bring a wealth of experience in technology, public administration, and community engagement, working tirelessly to build a platform that truly serves the needs of both representatives and citizens.`,
    stack:[
      {name:"Next Js"},
      {name:"Java"},
      {name:"Material UI"},
    ],    
    image:"/assets/work/vkn.jpg",
    live:'https://www.vikasneethi.com/',
    github:""
  },
  {
    num:'02',
    category:'frontend',
    title:'Campur Hire',
    stack:[
      {name:"React Js"},
      {name:"Node Js"},
      {name:"Material UI"},
      {name:"MongoDb"},
    ],    
    image:"/assets/work/campusHire.jpg",
    live:'https://app.campushire.net/',
    github:"",
    description:`it is a platform to learn technologies buy course from the platform. Check ability by assessment to
              take quiz and produce result as per the student output also.There are many roles like admin, student,
              author, instructot.
              it is the process of recruiting students studying in universities and colleges for jobs in the company. The
              program is usually conducted with the universities/colleges to identify potential student`
  },
  {
    num:'03',
    category:'fullstack',
    title:'WorkerNaka',
    stack:[
      {name:"Angular-9"},
      {name:"Sails Js"},
      {name:"Bootstrap"},
    ],    
    image:"/assets/work/workernaka.jpg",
    live:'https://www.workernaka.com/',
    github:"",
    description:`Workernaka is build on An Agnular 9 as a Frontend and Sailsj js Nodekjs framework with mysql as a
          Backend. Worker naka is a Job portal to hire worker he/she have skills like plumber,carpainter etc..
          Workers and Contractor register on the portal and send offer by execute query by front end and the
          worker get the offer by sms and they also repose with reply by sms`
  },
  {
    num:'04',
    category:'frontend',
    title:'RozgarSarthi',
    stack:[
      {name:"Angular Js"},
      {name:"Java"},
    ],    
    image:"/assets/work/rozgarSarthi.jpg",
    live:'https://www.rozgarsarathi.org/ui/#/',
    github:"",
    description:`Sarthak’s Rozgar Sarathi is an accessible online job portal which will provide private as well as
        government jobs for Persons with Disabilities (PwD’s).My role on this project is An AngularJs Developer.`
  },
  {
    num:'05',
    category:'frontend',
    title:'Sarthak India',
    stack:[
      {name:"Angular Js"},
      {name:"Java"},
    ],    
    image:"/assets/work/thumb2.png",
    live:'https://sarthakindia.org/',
    github:"",
    description:`Sarthak’s India Sarathi is an accessible online job portal which will provide private as well as
        government jobs for Persons with Disabilities (PwD’s).My role on this project is An AngularJs Developer.`
  },
  {
    num:'06',
    category:'frontend',
    title:'Apply Insure',
    stack:[
      {name:"Angular Js"},
      {name:"Node Js"},
    ],    
    image:"/assets/work/applyInsure.jpg",
    live:'https://www.apply.insure/',
    github:"",
    description:`insurance and secure properties like car ,house etc.
       My role on this project is a Frontend Developer`
  },
  {
    num:'07',
    category:'frontend',
    title:'Next Care',
    stack:[
      {name:"Angular Js"},
      {name:"Node Js"},
    ],    
    image:"/assets/work/nextCare.jpg",
    live:'https://www.nextcarehealth.com/',
    github:"",
    description:`Its US based clients web site.Its develop to buy insurance ,book appointment etc. My Role on this project
       is Fronted developer`
  },
  {
    num:'08',
    category:'frontend',
    title:'Xenett',
    stack:[
      {name:"Angular 18"},
      {name:"Node Js"},
    ],    
    image:"/assets/work/xanett.jpg",
    live:'https://www.xenett.com/',
    github:"",
    description:`Xenett is a smart cleanup tool that auto-detects errors and helps close the books efficiently while collaborating with your teammates and clients.`
  },
  {
    num:'09',
    category:'Desktop',
    title:'Neo Staff',
    stack:[
      {name:"Angular 18"},
      {name:"Node Js"},
      {name:"Electron Js"},
    ],    
    image:"/assets/work/thumb1.png",
    live:'https://www.xenett.com/',
    github:"",
    description:`Its a desktop application work same as like a top time tracker.My role on this project is Frontend
      developer`
  }
]
const Work=()=> {
  const [projects,setProjects]=useState(allProjects[0]);
const handleSlideChange=(swiper)=>{
  const currentIndex=swiper.activeIndex
  setProjects(allProjects[currentIndex])
}
  return (
    <motion.section 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }} 
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projects.num}</div>
          <h2 style={{
          animation: "blink 2s infinite",
        }} className="capitalize text-[52px] font-extrabold text-outline leading-none text-accent hover:text-accent transition-all duration-500">{projects.title}</h2>
          <p className="text-white/60">{projects.description}</p>
          <ul className="flex gap-4">
            {projects.stack.map((stack, index) => (
              <li key={index} className="text-xl text-accent">
                <Button className="text-primary">{stack.name}</Button>
              </li>
            ))}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            <Link href={projects.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-primary">
                    <p>Live Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>

      {/* Slides */}
      <div className="w-full xl:w-[50%]">
        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
          {allProjects.map((project, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center bg-pink-50/20">
                {/* Overlay */}
                <div className="absolute top-5 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image 
                    src={project.image} 
                    alt="image" 
                    layout="fill" 
                    objectFit="cover" 
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <WorkSlideBtn 
            containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyle="bg-accent hover:bg-accent-group text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </div>
  </div>
</motion.section>

  )
}

export default Work
