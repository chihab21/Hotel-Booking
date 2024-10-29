import express from 'express'
import { Createbooking, DeletBooking, GetAllBookings, GetOneBooking, UpdateBooking } from '../controllers/BookingControllers.js'


const router=express.Router()




router.get('/allbooking',GetAllBookings)
router.get('/onebooking/:id',GetOneBooking)

router.put('/update/:id',UpdateBooking)
router.delete('/delet/:id',DeletBooking)

router.post('/create',Createbooking)


export default router