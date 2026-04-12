import dotenv from "dotenv";
import connectDB from "./config/database.js";  
import app from "./app.js";

dotenv.config();
console.log("TEST DEBUG MONGODB_URI:", process.env.MONGODB_URI); 


const startServer = async () => {
    try {
      await connectDB(); // Connect to the database
      
      app.on("error", (error) => {
        console.log("ERROR", error);
        throw error;
      });
    
     app.listen(process.env.PORT || 8000, () => {
       console.log(`Server is running on port ${process.env.PORT || 8000}`);
      });
    }

    catch (error) {
      console.error("Error starting the server:", error);
      process.exit(1); // Exit the process with failure
    }

  }

startServer();

