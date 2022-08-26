const { Int32 } = require('mongodb')
var mongoose = require('mongoose')

var Schema = mongoose.Schema 

var schema = new Schema(
    {
        id:{type:Number,required:true},
        eventName:{type:String,required:true},
        eventDate:{type:Date,required:true},
        eventVenue:{type:String,required:true},
        eventDetails:{type:String,required:true},
        eventType:{type:String,required:true},
        imagePath:{type:String,required:true},
        price:{type:Number,required:true}
    }
)

module.exports = mongoose.model('event',schema)