import React, { useEffect, useState } from "react";
import '../Register/Regsiter.css'
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/auth/authSlice";
import { useNavigate } from "react-router";
const Login = () => {

  const dispatch=useDispatch()
  const {  isSuccess, isError, isLoading, message } = useSelector((state) => state.auth);

  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const {  email, password } = formData;


  const handleChnage=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    if(isSuccess){
navigate('/')

    }
  },[navigate,isSuccess])

   const handleSubmit=(e)=>{
    e.preventDefault()

    dispatch(LoginUser(formData))

    



  }


  return (
    <div className="container">
      <div className="header-title">
        <h1> Login </h1>
      </div>

      <div>
        <form className="input-groupe"  onSubmit={handleSubmit} >
         
      
          <div className="input-form">
            <label> Email : </label>
            <input type="email"   name="email" onChange={handleChnage} value={email} placeholder="Email" required />
          </div>
          <div className="input-form">
            <label> Password : </label>
            <input type="password" name="password" value={password} onChange={handleChnage}  placeholder="Passowrd" required />
          </div>

          <button className="btn" > Submit  </button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
