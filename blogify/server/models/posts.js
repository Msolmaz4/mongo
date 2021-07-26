import mongoose from 'mongoose'


const postSchema = mongoose.Schema ({                        //yeni sema olustturuyorum
        title :String,
        subtitle:String,
        content: String,
        tag : String,
        image:String,
        creatdat:{
            type:Date,
            default :new Date (),
        },
});     
const Post =mongoose.model ('Post',postSchema);           // export etmek icin onc emodel olusturuyoruz
                                                          //post ismioni veriyoruz ve postSchema parametre olarak veroyoruz
export default Post;                        // olusturdugum post export ediyorum
