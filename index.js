const express= require("express")
const appConfig=require('./config/appconfig')
// const mongoose=require('mongoose')
var mongoose = require('mongodb').MongoClient;
const fs=require('fs')

//const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")


 const app=express()

 mongoose.connect(appConfig.db.uri, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
 //middlewares
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}))
 //app.use(cookieParser())

let routespath='./routes'
fs.readdirSync(routespath).forEach(function(file){
if (file.indexOf('js')){
    let route= require(routespath+'/'+file)
    route.setRouter(app)
}
});
let modelsPath='./models'
fs.readdirSync(modelsPath).forEach(function(file){
    if (file.indexOf('js'))require(modelsPath+"/"+file)

});




 app.listen(appConfig.port,()=>{
     console.log('app listening 3000');
     let db=mongoose.connect(appConfig.db.uri,{useNewUrlParser: true})
})
//handling the mongoose connection error
mongoose.connection.on('error',function(err){
console.log('db connectio error');
    console.log(err)
})//end mongoose connection error


// handling the mongoose success event
mongoose.connection.on('open',function(err)
{
    if(err){
        console.log('database error');
        console.log(err)

    }else{
        console.log('connected')
    }
})