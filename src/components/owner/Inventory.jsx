import React, { useEffect, useState } from 'react'
import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://the-birthday-cake-db.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '0048b0e039msh7791e30bb01e8c8p12bf42jsna3821f36e7ad',
    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
  }
};


const Inventory = () => {
  const [cake, setCake]=useState([])

  const getData=async()=>{
    try{
      const response= await axios.request(options)
      // console.log(response.data)
      setCake(response.data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
  getData()
  },[])

  // useEffect(()=>{
  //   try {
  //     const response =  axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },[])
console.log(cake)
  return (
    <div>
      <div>inventory</div>
      {cake.map((cake)=>(
        <div>
          <img src={cake.image} alt={cake.title} width="300px"/>
          <div>{cake.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Inventory