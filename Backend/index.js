import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoute from './routes/todo.route.js';
import userRoute from "./routes/user.route.js";
import cors from 'cors';



const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;  // Port number for the server
const DB_URI = process.env.MONGODB_URI;  // Database URI 

// middleware

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "Get,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
}))




//Database connection code
try{
 await mongoose.connect(DB_URI);
    console.log('Database connected to MongoDB');
}catch(err){
    console.log(err);
}



app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {    
    console.log(`Server is running on port  ${PORT}`);
});

// Showing how to commit after publishsing the project to github