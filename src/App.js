import React from 'react'
import Header from './Comonents/Header/Header'
import { Route, Routes } from 'react-router'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Dashbord from "./Pages/Dashbord/Dashbord"
import CreateRoom from "./Pages/Romms/CreateRoom"
import Romms from './Pages/Romms/Romms'
import Home from './Pages/Home/Home'
import Room from './Pages/Romms/Room'
import Booking from './Pages/Booking/Booking'
const App = () => {
  return (
    <>

    <Header/>

    <Routes>

    <Route path='/' element={<Home/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/dashbord' element={<Dashbord/>}/>

      <Route path='/create' element={<CreateRoom/>}/>
      <Route path='/rooms' element={<Romms/>}/>

      <Route path={`/room/:id`} element={<Room/>}/>
      <Route path="/book" element={<Booking/>} />




    </Routes>

    </>
  )
}

export default App
