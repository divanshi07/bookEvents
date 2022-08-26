
var express = require('express')
var app = express() 

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/eventDetails')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());

var cors = require('cors')

app.use(cors({
  origin:'http://localhost:4200'
}))

app.use('/users',userRouter)
app.listen(3000,()=>{
  console.log("server started on 3000");
})

module.exports = app