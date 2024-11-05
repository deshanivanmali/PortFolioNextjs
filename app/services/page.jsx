"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import {BsArrowDownRight} from "react-icons/bs"


const services=[
  {
    num:"01",
    title:'Web Development',
    href:"",
    description:`I bring ideas to life on the web, crafting responsive, visually stunning websites and applications that work beautifully across all devices. With a passion for both design and functionality, I ensure seamless user experiences backed by clean, efficient code. Whether it's a sleek landing page or a robust web app, I’m dedicated to delivering digital solutions that leave a lasting impression.`
  },
  {
    num:"02",
    title:'Desktop Application Development',
    href:"",
    description:`I build powerful, reliable desktop applications tailored to your specific needs. With a focus on performance and usability, my desktop solutions are designed to provide a seamless experience, whether for business or personal use. From intuitive interfaces to robust functionality, I craft applications that are efficient, user-friendly, and scalable across different operating systems`
  },
  {
    num:"03",
    title:'App Development',
    href:"",
    description:`I create intuitive, high-performance mobile and web apps designed to enhance user experiences. With a focus on functionality and seamless interaction, my apps are tailored to meet the unique needs of users while running efficiently on all platforms. Whether it’s a simple utility or a complex application, I transform ideas into smooth, engaging, and scalable solutions that users love to engage with.`
  },
  {
    num:"04",
    href:"",
    title:'UI/UX Development',
    description:`I design user interfaces that are not only visually captivating but also highly intuitive and user-centered. By blending creativity with a deep understanding of user behavior, I create experiences that feel effortless and enjoyable. My goal is to ensure every interaction is smooth, meaningful, and aligned with your brand, making the journey as engaging as the destination.`
  },
 
]
function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
     className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
     >
      { 
        services.map((service,index)=>{
          return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
            {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
             {/* description */}
             <p className="text-white/60">{service.description}</p>
             {/* border */}
             <div className="border-b border-white/20 w-full"></div>
          </div>
        })
      }
     </motion.div>
      </div>
    </section>
  )
}

export default Services
