import express from 'express'
import { login, logout, register,getAllUsers } from './auth-controller.js'

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
router.get("/users",getAllUsers)

export default router