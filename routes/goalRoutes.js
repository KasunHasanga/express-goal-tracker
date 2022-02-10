const express =require('express')

const router =express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({Message:"Get goals"})
})

router.post('/',(req,res)=>{
    res.status(200).json({Message:"Set Goals"})
})
router.put('/:id',(req,res)=>{
    res.status(200).json({Message:`update Goals ${req.params.id}`})
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({Message:`Delete Goals ${req.params.id}`})
})

module.exports =router


