import express from 'express'
import { addTransaction, deleteTransaction,getTransactions, getAllTransaction } from './transactions-controller.js'

const router = express.Router()

router.get("/get/:userId",getAllTransaction)
router.post("/add",addTransaction)
router.get("/",getTransactions)
router.delete("/delete/:id",deleteTransaction)
// router.delete("/transaction/:userId",deleteAllTransactionsByUserId)
export default router