import booking from "../models/bookingModel.js"


export const GetAllBookings=async(req,res)=>{
    try {
        const bookings=await booking.find()

        return res.status(200).json({
            success:true,
            bookings
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const GetOneBooking=async(req,res)=>{
    try {
        const oneBoking=await booking.findById(req.params.id)

        return res.status(200).json({
            success:true,
            oneBoking
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const DeletBooking=async(req,res)=>{
    try {
       await booking.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success:true,
            msg:'Room Deleted'
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const UpdateBooking=async(req,res)=>{
    try {
        const updatebooking=await booking.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{
            new:true
        })

        return res.status(200).json({
            success:true,
            updatebooking
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const Createbooking=async(req,res)=>{
    try {

        const newbooking=await booking.create(req.body)
        if(!newbooking){
            return res.status(400).json({
                success:false,
                msg:'there is an Eroor PLease try Again'
            })
        }
        
        newbooking.save()

        
        return res.status(201).json({
            success:true,
            msg:'Room Created'
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message

        })
    }
}