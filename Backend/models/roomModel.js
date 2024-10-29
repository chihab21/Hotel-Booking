import mongoose from "mongoose";

const RoomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    roomNumbers:{
        type:String
    },
    image: {
        type: String,
    }



})

const room=mongoose.model('room',RoomSchema)

export default room