import express from 'express'
import dotenv from 'dotenv'
import { Connect } from './Config/Db.js'
import RoomsRoutes from './routes/RoomRoutes.js'
import BookingsRoutes from './routes/BookingRoutes.js'
import UserRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";
import { auth } from './middlware/authmidleware.js'
import cors from "cors"
import path from 'path'
const app=express()
dotenv.config()
app.use(cookieParser());
app.use(cors())
// Connect To DataBase
Connect()



//middlewares
app.use(express.json())
app.use('/api/rooms',RoomsRoutes)
app.use('/api/booking',BookingsRoutes)
app.use('/api/users',UserRoutes)

app.get('/',(req,res)=>{
    res.send('Hello chihab')
})





app.get('/test',auth,(req,res)=>{
    res.send('Test')
})

const PORT=process.env.PORT|| 8000



if (process.env.NODE_ENV === "production") {
    const publicpath = path.join(__dirname, ".", "build");
    const filePath = path.resolve(__dirname, ".", "build", "index.html");
    app.use(express.static(publicpath));
  
    app.get("*", (req, res) => {
      return res.sendFile(filePath);
    });
  }
app.listen(PORT,()=>{
    console.log(`serveur connected in Port ${PORT}`);
    
})