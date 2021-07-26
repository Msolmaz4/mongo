import Post from '../models/posts.js';


export const getPosts=async (req,res) =>{           //asekrom foksyion tanimliyorum bu req res getirirt
    try {
           const posts =await Post.find();   //try catg cagru isteklerinde bukunuyorum ne kadar dosya vars abul getir
           res.status(200).json(posts)
    }catch(error){
res.status(404).json({
message:error.message
});
    }
};