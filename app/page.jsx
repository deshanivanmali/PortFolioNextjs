"use client";
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import {FiDownload} from "react-icons/fi";
import Work from './work/page';
import Link from 'next/link';

function Home() {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-row xl:items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
             <span className='text-xl' >Software Engineer</span>
             <h1 className='text-4xl mb-6' style={{
               animation: "blink 2s infinite",
              }}>Hello I`am <br /><span className='text-accent' > Vanmali Deshani</span></h1>
             <p className='max-w-[500px] mb-9 text-white/88'>I excel at crafting elegant digital experiences and I am proficient in various programming languages
              and technologies
             </p>
             {/* button and other */}
             <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline"
              size="lg"
               className="uppercase flex items-center gap-2"
               
               >
                <Link href="/assets/Deshani_Vanmali.pdf" download target="_blank">
                <span>Download CV</span>
              </Link>
                <FiDownload className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
             </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-9 xl:mb-0'>
            <Photo/>
          </div>
        </div>
       </div>
       <Stats/> 
       {/* <div className='mt-10'>
       <hr />
       </div>
       <div className='mt-12'>
       <Work/>
       </div> */}
    </section>
  )
}

export default Home

