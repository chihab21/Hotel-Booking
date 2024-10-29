import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllRooms, reset } from '../../Redux/auth/RoomSlice'
import RoomList from './RoomList'

const Romms = () => {

  const {rooms,isSuccess,isLoading}=useSelector((state)=>state.room)

  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getAllRooms())
    if(isSuccess){
      dispatch(reset())
    }
  },[])
  console.log(rooms);
  if(isLoading){
    return <h1> Loading ... </h1>
  }
  
  return (
    <div>
     <h1 className=''> Room List  </h1>
     <section className='room-lsit'> 

      
     {
      rooms.map((r,index)=>(
        <RoomList  key={index} room={r} />
      ))
     }
     </section>


   


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

export default Romms
