
const express=require("express")
// const mongoose=require("mongoose")
const mongoose = require('mongodb').MongoClient;

const BlogModel = require("./../models/Blog")

let createBlog=(req,res)=>{
    let today=Date.now()
    let blogID=shortid.generate()
    let newBlog = new BlogModel({
        blogID:blogID,
        title:req.body.title,
        description:req.body.description,
        bodyHtml:req.body.blogbody,
        isPublished:true,
        category:req.body.category,
        author:req.body.Fullname,
        created:toady,
        lastModified:today

    })
    newBlog.save((err,result)=>{
        if(err){
            console.log('error')
            res.send(err)
        }else{
            res.send(result)
        }

    })

}

module.exports={
    createBlog:createBlog
   
}