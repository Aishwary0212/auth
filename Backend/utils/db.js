import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const db=()=>{    
    mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("successfully connected to mongodb")
        })
        .catch((err)=>{
            console.log("error connecting to mongo db",err.message)
        })
}

export default db;