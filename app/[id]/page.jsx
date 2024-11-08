"use client";
import { useEffect } from "react";
import { useParams } from 'next/navigation'


function Home() {
  const params = useParams()
 
  useEffect(()=>{
  console.log(params.id)
  },[])
  return (
   <h1>Dymanic page id is {params.id}</h1>
  )
}

export default Home

