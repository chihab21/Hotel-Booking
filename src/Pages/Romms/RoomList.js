import React from 'react'
import { Link } from 'react-router-dom'

const RoomList = ({room}) => {

    const {image,name,_id}=room
  return (
    <div >
       <div className="rooms-gallery">
          <div className="room-card">
            <img src={image} alt="Room 1" />
            <h3> {name} </h3>
            <h5>  {room.description} </h5>
            <h4>  {room.price} </h4>

        
            <span className='btnroom'>  <Link to={`/book`} className="book-button "  >Book Now</Link> </span>
          </div>
          
        </div>
    </div>
  )
}

export default RoomList
