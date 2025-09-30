"use client";

import { motion } from "framer-motion";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
  FaAngular,
  SiMongodb 
} from "react-icons/fa";

import {
 SiTailwindcss,SiNextdotjs,SiNestjs,SiElectron,SiExpress,SiNuxtdotjs
} from "react-icons/si";

//components
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import { useState } from "react";
import Link from "next/link";

// data
const about={
   title:"About Me",
   description:"I specialize in both front-end and back-end development, creating dynamic and user-friendly applications. I have worked on mission-critical projects and collaborated with teams to deliver high-quality solutions on time and within budget. I'm excited to bring my expertise to your team and contribute to impactful web applications.",
   info:[
    {
      fieldName:"Name",
      filedValue:"Vanmali Deshani"
    }, 
    // {
    //   fieldName:"Skype",
    //   filedValue:"live:.cid.8a7641d0fc52dbf8"
    // },  
    {
      fieldName:"Team",
      filedValue:"infodeshanivanmali@gmail.com"
    },
    {
      fieldName:"Mobile",
      filedValue:"(+91)9408316491"
    },
    {
      fieldName:"Email",
      filedValue:"deshanivanmali@gmail.com"
    },
    {
      fieldName:"Experience",
      filedValue:"5 Years"
    },
    
   
    {
      fieldName:"Nationality",
      filedValue:"Indian"
    },
    {
      fieldName:"Freelance",
      filedValue:"Available"
    },
    {
      fieldName:"Languages",
      filedValue:"English,Hindi,Gujrati"
    }
    
   ]
};

// Experience data
const experience={
   icons:'/assents/resumes/badge.svg',
   title:"My experience",
   description:"I have 5 years of experience developing and maintaining web applications using a range of technologies, including React.js, Angular, Node.js, ExpressJS, Nest.js, Sailsjs. My expertise in both front-end and back-end development has allowed me to create user-friendly and dynamic web applications that meet the needs of clients and end-users alike.",
   items:[
    {
      company:'knowzaltech Pvt Ltd',
      position:"Sr.Frontend Developer",
      duration:"2024 - Present",
      link:"https://knowzaltech.in/",

    },
    {
      company:'Henotic It Solutions Pvt Ltd',
      position:"Frontend Developer",
      duration:"2023  - 2024",
      link:"https://henotictech.com/",

    },
    {
      company:'Systems Dynamics Pvt Ltd',
      position:"Frontend Developer",
      duration:"2023  - 2024",
      link:"https://sdindia.com/",

    },
    {
      company:'Manektech Pvt Ltd',
      position:"Jr.Angular Developer",
      duration:"2021 - 2022",
      link:"https://www.manektech.com/",

    },
    {
      company:'WebTech Evolution',
      position:"Jr.Full Stack Developer",
      duration:"2019 - 2021",
      link:"https://webtech-evolution.com/",

    }
   ]
}

// Education data
const education={
  icons:'/assents/resumes/cap.svg',
  title:"My education",
  description:"My education is mostly in computer science.I did my education in good.I describe her my education.you me check here",
  items:[
   {
     institute:'Bosmia College Jetpur',
     degree:" Computer Science MSC(IT&CA)",
     duration:"2011 - 2013"

   },
   {
    institute:'Bosmia College Jetpur',
    degree:"Computer Science PGDCA",
    duration:"2010 - 2011"

  },
  
  ]
}

// Skills data
const skills={
  icons:'/assents/resumes/cap.svg',
  title:"My skills",
  description:"Experienced in frontend and backend web development using latest technologies. Proficient in creating responsive UIs and building scalable APIs, with strong knowledge of databases and version control systems.",

 items:[
  {
    icon:<FaAngular/>,
    name:"angular.js"
  },
  {
    icon:<FaReact/>,
    name:"react.js"
  },
  {
    icon:<SiNextdotjs/>,
    name:"next.js"
  },
   {
    icon:<SiNuxtdotjs />,
    name:"nuxt.js"
  },
 
  {
    icon:<FaNodeJs/>,
    name:"node.js"
  },

  {
    icon:<SiNestjs/>,
    name:"nest.js"
  },
  {
    icon:<SiElectron/>,
    name:"electron.js"
  },
  {
    icon:<SiExpress/>,
    name:"express.js"
  },
  {

    icon:<FaHtml5/>,
    name:"html 5"
 },
 {
   icon:<FaCss3/>,
   name:"css 3"
},
 {
   icon:<FaJs/>,
   name:"javascript"
 }, 
  // 
  {
    icon:<SiTailwindcss/>,
    name:"tailwind.css"
  },
 
  {
    icon:<FaFigma/>,
    name:"figma"
  },
  {
    icon:<SiMongodb />,
    name:"MongoDB"
  }
]
}
function Resume() {

  return <motion.div
  initial={{opacity:0}}
  animate={{
    opacity:1,
    transition:{delay:0.4,duration:0.4,ease:'easeIn'}
  }}
 className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" >
   <div className="container mx-auto">
   <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
    <TabsList className="flex flex-col gap-4 w-full max-w-[350px] mx-auto xl:mx-0" >
      <TabsTrigger value="experience" >Experience</TabsTrigger>
      <TabsTrigger value="education" >Education</TabsTrigger>
      <TabsTrigger value="skills" >Skills</TabsTrigger>
      <TabsTrigger value="about" >About Me</TabsTrigger>
    </TabsList>
    {/* content */}
    <div className="min-h-[70vh] w-full">
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold capitalize">{experience.title}</h3>
        <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{experience.description}</p>
        <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {
            experience.items.map((item,index)=>{
              return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                <span className="text-accent ">{item.duration}</span>
                <h3 className="text-2xl max-w-[268px] min-h-[60px] text-center lg:text-left font-extrabold text-outline text-transparent">{item.position}</h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/68 capitalize">
                  <Link href={item.link} target="_blank">
                  {item.company}
                  </Link>
                  
                  </p>
                </div>
                
                </li>
            })
          }
        </ul>
        </ScrollArea>
      </div>
      
  
    </TabsContent>
    <TabsContent value="education" className="w-full">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold capitalize">{education.title}</h3>
        <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
        <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {
            education.items.map((item,index)=>{
              return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-2xl max-w-[268px] min-h-[60px] text-center lg:text-left font-extrabold text-outline text-transparent">{item.degree}</h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/68 capitalize">{item.institute}</p>
                </div>
                
                </li>
            })
          }
        </ul>
        </ScrollArea>
      </div>
    </TabsContent>
    
    <TabsContent value="skills" className="w-full h-full">
    <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mb-4">
        {
          skills.items.map((skill,index)=>{
            return <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl text-opacity-25 hover:bg-accent-hover transition-all duration-300">{skill.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                  <div className="capitaliz">{skill.name}</div>                    
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          })
        }
      </ul>
    </div>
    </div>
    </TabsContent>
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px] mb-8">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
       <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        { 
          about.info.map((i,index)=>{
            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
              <span className="text-white/60">{i.fieldName}</span>
              <span className="text-xl hover:text-accent">{i.filedValue}</span>
            </li>
          })
        }
       </ul>
      </div>
    </TabsContent>
    
    </div>
   </Tabs>
   </div>
  </motion.div>;
}

export default Resume;
