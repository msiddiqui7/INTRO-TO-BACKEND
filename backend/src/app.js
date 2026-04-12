import  express from "express";

const app = express(); //create an instance of express

//parse incoming JSON data
app.use(express.json());
//what this do? It allows the server to understand and process JSON data sent in the body of HTTP requests. When a client sends a request with a JSON payload, this middleware parses the JSON and makes it available in the req.body property of the request object. This is essential for handling API requests where clients often send data in JSON format, such as when creating or updating resources on the server.

//routes import
import userRoutes from "./routes/user.route.js";

//routes declaration
app.use("/api/v1/users", userRoutes); //use the user routes for any requests to /api/v1/users


//example route: http://localhost:5000/api/v1/users/register/
app.get("/api/v1/users/register", (req, res) => {
  res.json({ message: "User route is working!" });
});


export default app;