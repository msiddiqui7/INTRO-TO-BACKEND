import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
   try {
      const connectionInst = await mongoose.connect(process.env.MONGODB_URI)
      console.log(`MongoDB connected!!!: ${connectionInst.connection.host}`);  
    } catch (error) { 
      console.error(`Error connecting to MongoDB: ${error.message}, DB_NAME: ${DB_NAME}`);
      process.exit(1); // Exit the process with failure
    }
}

export default connectDB;

