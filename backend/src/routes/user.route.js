import {Router} from "express";
import {registerUser} from "../controller/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
//Wht is router.route("/register").post(registerUser);?
//This line defines a route for handling POST requests to the "/register" endpoint. When a client sends a POST request to this endpoint, the registerUser function from the user.controller.js file will be executed to handle the registration logic for a new user. The router.route() method allows you to chain multiple HTTP methods (like GET, POST, etc.) for the same route, making it easier to manage different actions for the same endpoint.
//example route: http://localhost:5000/api/v1/users/register/

export default router;