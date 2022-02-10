const express=require('express')
const router =express.Router()
const{registerUser,getMe,loginUser} =require('../controlles/userController')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',getMe)


module.exports =router