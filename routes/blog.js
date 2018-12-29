const express=require("express")
const blogcontroller=require("./../controllers/blogController")
const appConfig=require('./../config/appconfig')

let setRouter=(app)=>{

    let baseurl=appConfig.apiVersion+"/blogs";

    app.get(baseurl+'/create',blogcontroller.createBlog)
    




}
module.exports={
    setRouter:setRouter
}