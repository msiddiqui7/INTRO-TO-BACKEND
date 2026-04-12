import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    //basic validation
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email: email.toLowerCase() }] });
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists" });
    }

    //create new user
    const newUser = await new User({
      username,
      password,
      email: email.toLowerCase(),
      loggedIn: false,
    });

    await newUser.save();
    res.status(201).json({ 
      message: "User registered successfully",
      user: {
        id: newUser._id, username: newUser.username, email: newUser.email,
      }
    });
  }
  catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server error" });
  }

}

export { registerUser };