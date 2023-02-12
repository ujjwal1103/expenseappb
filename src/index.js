import express from "express";
import transactionRoutes from "./Transaction/transactions-routes.js";
import authRoutes from "./Authentication/auth-routes.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
mongoose.set('strictQuery', false)
const corsOptions ={
    origin:'https://expenseapp2.netlify.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
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