import express from 'express'
import { CreateRooms, DeletRoom, GetAllRooms, GetRoom, UpdateRoom, upload } from '../controllers/RoomsControllers.js'


const router=express.Router()




router.get('/all',GetAllRooms)
router.get('/one/:id',GetRoom)

router.put('/update/:id',UpdateRoom)
router.delete('/delet/:id',DeletRoom)

router.post('/create',upload.single("image"),CreateRooms)


export default router