import axios from 'axios'
import React, { useEffect } from 'react'

const Dashbord = () => {

  const get=async()=>{
    try {
      const res= await axios.get('http://localhost:8000/api/rooms/all')
      console.log(res.data);
      
      
    } catch (error) {
      console.log(error.message);
      
    }

  }
  useEffect(()=>{
    get()
  },[])
  return (
    <div>
      Dashbord
    </div>
  )
}

export default Dashbord
