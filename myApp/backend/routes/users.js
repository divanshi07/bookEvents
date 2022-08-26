var express = require('express');
var router = express.Router();
var User = require('../model/user')
var EventDet = require('../model/event');
const { db } = require('../model/user');
router.post('/register',(req,res,next)=>{
  console.log("req",req.body);
  var user=new User({
    email:req.body.email,
    password:req.body.password
  })
  let promise = user.save()
  promise.then((doc)=>{
    return res.status(201).json(doc)
  })
  promise.catch((err)=>{
    return res.status(501).json({message:'error registering'})
  })
})

router.post('/event',(req,res,next)=>{
  var event=new EventDet({
    id:req.body.id,
    eventName:req.body.eventName,
    eventDate:req.body.eventDate,
    eventVenue:req.body.eventVenue,
    eventDetails:req.body.eventDetails,
    eventType:req.body.eventType,
    imagePath:req.body.imagePath,
    price:req.body.price

  })
  let promise = event.save()
  promise.then((doc)=>{
    return res.status(201).json(doc)
  })
  promise.catch((err)=>{
    return res.status(501).json({message:'error posting event'})
  })
})
router.get('/events',(req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  EventDet.find({ name: 'Punit'}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
        res.send(docs)
    }
});
})

module.exports = router;
