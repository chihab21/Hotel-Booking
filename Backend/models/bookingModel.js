import mongoose from "mongoose";

const BookingSchema=new mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room'
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    CheckIn:{
        type:Date,
        required:true
       
    },
    CheckOut:{
        type:Date,
        required:true
       
    },
    confirmed:{
        type:Boolean,
        required:true
    }




},{
    timestamps:true
})

const booking=mongoose.model('booking',BookingSchema)

export default booking