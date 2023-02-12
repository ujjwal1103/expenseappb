import mongoose from "mongoose"
import { Transaction } from "../Transaction/transaction.js"
const UserSchema = new  mongoose.Schema({
    username : String,
    email: String,
    password: String,
    mobileNumber: Number
}, { timestamps: true })




export const User =  mongoose.model("User", UserSchema)