import React, { useState } from "react";
import './room.css'
import axios from "axios";
const CreateRoom = () => {


    const [formData,setFormData]=useState({
        name:'',
        description:"",
        price:"",
        roomNumbers:""



    })
    const [file, setFile] = useState(null); 


    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const handleSumbit= async(e)=>{
        e.preventDefault()
     
        const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("description", formData.description);
    formDataObj.append("price", formData.price);
    formDataObj.append("roomNumbers", formData.roomNumbers);
    if (file) {
      formDataObj.append("image", file); 

      
    }


    try {
        const res=  await axios.post('http://localhost:8000/api/rooms/create')
      console.log(res.data);
      
        
    } catch (error) {
        console.log(error.message);
        
    }


       
        
    }

    const handleFileChange=(e)=>{
    setFile(e.target.files[0]);
        
    }

    const {name,description,price,roomNumbers}=formData
  return (
    <div  className="containerroom" >
      <h1> Create Room </h1>

      <div className="form ">
        <form onSubmit={handleSumbit}>
          <div className="input-room">
            <label> Name </label>
            <input type="text" onChange={handleChange} value={name} name="name" placeholder="name" />
          </div>
          <div className="input-room">
            <label> Description </label>
            <input type="text" value={description}  onChange={handleChange}  name="description" placeholder="Description" />
          </div>{" "}
          <div className="input-room">
            <label> Price </label>
            <input type="text" name="price" onChange={handleChange}  value={price} placeholder="Price" />
          </div>
          <div className="input-room">
            <label> roomNumbers </label>
            <input type="text" value={roomNumbers} onChange={handleChange}  name="roomNumbers" placeholder="roomNumbers" />
          </div>


          <div className="input-room">
            <label> Images </label>
            <input  onChange={handleFileChange}   name="file" type="file"  placeholder="roomNumbers" />
          </div>
          <button className="btn" > Submit </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
