import express from "express";
import transactionRoutes from "./Transaction/transactions-routes.js";
import authRoutes from "./Authentication/auth-routes.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
mongoose.set('strictQuery', false)

app.use(cors());



app.use( (req, res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type, Accept,Authorization");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  next();
  })


  
app.use(express.json());
app.use("/api/transactions", transactionRoutes);
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 3002;




const init = async (_) => {
  const connection = await mongoose.connect("mongodb+srv://ujjwallade:U8J8W0A5L@expenses.i74z1ip.mongodb.net/Users?retryWrites=true&w=majority");
  if (connection) {
    app.listen(PORT, () => {
      console.log(process.env.PORT);
      console.log(`Happy coding server is live on http://localhost:${PORT}`);
    });
  }
};



init()