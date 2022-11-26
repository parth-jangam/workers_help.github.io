const { urlencoded } = require('express')
const express = require('express')
const Notes= require('./storage/Notes')
const router = express.Router()
const path=require('path')

router.use(express.static('./static'))
// router.set('view engine','hbs');

router.use(express.urlencoded({extended:false}))
router.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'./review.html'))
    res.render('review')
})
router.post('/submit',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'./review.html'))
    const notes=Notes(req.body)
    notes.save();
    res.send(req.body)
})
module.exports=router