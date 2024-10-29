import mongoose from "mongoose"



export const Connect= async()=>{

    try {
        
        const connect=await mongoose.connect('mongodb+srv://chihabghlala49:iV8p32F6UQiIOP4A@cluster0.mhze2.mongodb.net/')
        if(connect){
            console.log('Connected to DataBase');
            
        }
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }

}