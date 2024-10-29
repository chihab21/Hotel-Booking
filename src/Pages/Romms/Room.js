import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneRoom } from '../../Redux/auth/RoomSlice'
import { useParams } from 'react-router'
import axios from 'axios'

const Room = () => {
  const  { id }=useParams()

  const get=async()=>{
    try {
      const res = await axios.get(`http://localhost:8000/api/rooms/one/${id}`);
      console.log(res?.data?.room);
    
  } catch (error) {
      console.log(error.message);
     
  }
  }

 
  
  useEffect(()=>{
get()
  },[])
  return (
    <div>
      Room




      
      <footer className="footer">
        <p>&copy; 2024 Room Booking. All rights reserved.</p>
        <p>Follow us on:
          <a href="https://www.facebook.com">Facebook</a> | 
          <a href="https://www.twitter.com">Twitter</a> | 
          <a href="https://www.instagram.com">Instagram</a>
        </p>
      </footer>
    </div>





  )
}

export default Room
