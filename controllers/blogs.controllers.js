const Blogs = require("../models/blogs.models")

const createNewBlog = async(req,res) => {
    const {title, authors, content, publishedAt} = req.body;
    const newBlogDoc = new Blogs({
        "title" : title,
        "authors" : authors,
        "content" : content,
        "publishedAt" : publishedAt
    });
    const result = await newBlogDoc.save()
    console.log(newBlogDoc)
    res.status(200).send(result)
}

const getAllBlogs = async(req,res) =>{
    try{
        const blogs = await Blogs.find({})
        res.json(blogs)
    }
    catch(err){
        res.json({
            message : "Could not fetch blog from DB",err
        })
    }
}

module.exports = {
    createNewBlog,
    getAllBlogs
}