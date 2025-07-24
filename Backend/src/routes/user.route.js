const router = require("express").Router()
const {register,login,logout,getMe} = require("../controller/user.controller")
const auth = require("../middlewares/auth")

router.post("/register",register)
router.post("/login",login)
router.post("/logout",auth,logout)
router.get("/me",auth,getMe)

module.exports=router