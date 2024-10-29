import room from "../models/roomModel.js"
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/uploads"); // Directory to store images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

// Configure multer middleware
  export const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        // Accept only image files
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Only images are allowed");
    }
});


export const GetAllRooms=async(req,res)=>{
    try {
        const rooms=await room.find()

        return res.status(200).json({
            success:true,
            rooms
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const GetRoom=async(req,res)=>{
    try {
        const Room=await room.findById(req.params.id)

        return res.status(200).json({
            success:true,
            Room
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const DeletRoom=async(req,res)=>{
    try {
       await room.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success:true,
            msg:'Room Deleted'
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const UpdateRoom=async(req,res)=>{
    try {
        const updateRoom=await room.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{
            new:true
        })

        return res.status(200).json({
            success:true,
            updateRoom
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const CreateRooms=async(req,res)=>{
    try {

        const newRoom = new room({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            roomNumbers: req.body.roomNumbers ? JSON.parse(req.body.roomNumbers) : [],
            image: req.file ? req.file.path : null // Save image path
        });

        const savedRoom = await newRoom.save();
        if(!savedRoom){
            return res.status(400).json({
                success:false,
                msg:'there is an Eroor PLease try Again'
            })
        }
        
        

        
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