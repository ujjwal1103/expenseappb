import mongoose from "mongoose"
const TransactionSchema = new  mongoose.Schema({
    title : String,
    amount: Number,
    type: String,
    mobileNumber: Number,
    userId: String
}, { timestamps: true })




export const Transaction =  mongoose.model("Transaction", TransactionSchema,)