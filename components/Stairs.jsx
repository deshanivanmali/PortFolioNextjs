"use client";

import { animate, motion } from 'framer-motion';
// animation
const StartAnimations={
  initial:{
     top:"0%",
  },
  animate:{
    top:'100%'
  },
  exit:{
    top:['100%','0%']
  }  
}
const reversIndex=(index)=>{
  const totalSteps=6;// number of steps
  return totalSteps-index-1
}

function Stairs() {
  return (
    <>
    {/* render and /Motion */}
 {[...Array(6)].map((_,index)=>{
   return <motion.dev key={index} variants={StartAnimations} initial="initial" animate="animate" exit={"exit"}
   transition={{
    duration:0.4,
    ease:'easeInOut',
    delay:reversIndex(index) * 0.1,
    
   }}
   className='h-full w-full bg-white relative' />
 })}
    {/* {data.map((_,index)=>{
     return  (<motion.div  key={index} variants={StartAnimations} initial="initial" animate="animate" exit={"exit"}
     transition={{
      duration:0.4,
      ease:'easeInOut',
      delay:reversIndex(index) * 0.1,
      
     }}
     className='h-full w-full bg-white relative'
     />)
     
    })} */}
    </>
  )
}

export default Stairs
