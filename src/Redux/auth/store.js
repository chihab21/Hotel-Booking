import { configureStore } from "@reduxjs/toolkit";
import RoomReducer from './RoomSlice'

import authReducer from './authSlice'
const store=configureStore({
    reducer:{
        auth:authReducer,
        room:RoomReducer
    }
})

export default store