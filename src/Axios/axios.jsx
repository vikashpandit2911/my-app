import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";


export default function Axios() {
    useEffect(()=>{
         axios.get("https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY")
         .then((res)=>
         console.log("sucessful",res)
         );
    },[])
  return (
    <div>
      <h2>Axios Demo</h2>
    </div>
  )
}
