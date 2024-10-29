import React, { useEffect, useState } from "react";
import './Regsiter.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RegisterUser, reset } from "../../Redux/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  isSuccess, isError, isLoading, message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !password){
      return
    }
    dispatch(RegisterUser(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, navigate, dispatch]);

  return (
    <div className="container">
      <div className="header-title">
        <h1>Register</h1>
      </div>
      <div>
        {isError && (
          <div>
            <p className="error-message">{message}</p>
            {message === "User found, please login." && (
              <button className="btn" onClick={() => navigate("/login")}>Go to Login</button>
            )}
          </div>
        )}
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="input-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-form">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-form">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button   className="btn" type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Register;
