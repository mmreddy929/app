const mongoose= require("mongoose")
// importing mongoose module
//const mongoose = require('mongodb').MongoClient;

// import schema
const schema = mongoose.Schema;

let blogSc = new schema(
    {
        blogID:{
            type:String,
            unique:true
        },
        title:{
            type:String,
            default:""
        },
        description:{
            type:String,
            default:""
        },
        bodyHtml:{
            type:String,
            default:""
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:false
        },
        category:{
            type:String,
            default:""
        },
        author:{
            type:String,
            default:""
        },
        
        tags:[],
        created:{
            type:Date,
            default:Date.now
        },
        lastModified:{
            type:Date,
            default:Date.now
        }
        
    }
)
const Blog=mongoose.model('Blog',blogSc)
module.exports= {
    Blog:Blog}



