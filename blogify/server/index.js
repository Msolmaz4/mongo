import express from 'express';  // packageson type module ekleyerek import seklinde yazdik
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/posts.js';
 

const app = express();  // express serveri olusturduk

dotenv.config();     // yukedikten sonra imprt daha sonra cagiriyoruz

app.use(bodyParser.json({limit:'30mb',extend: true})); //json formayind agelen bilgiyi kabul et
app.use(bodyParser.urlencoded({limit:'30mb',extend: true}));     //extend uayri vermesin diye yazildi limit normal size hata veriyor
app.use(cors());


app.get('/', (req,res)=> { // ilk server dosyam geldigi zaman bir req ve res aliyorum
res.json({
    author:'coding duygum',          //verdigim cevap
    message:'ich liebe dich',

});  
});

app.use('/posts',postRoutes);    //posts enpointene geldigi zaman postR seklinde tanimlayacagim 
                                 //routes posts.js yappmadan once bunu yaptik import etmeyi unutma

const PORT = process.env.PORT || 5000;  // port tanimlama



                          //BAGLANMAK ICIN URL IHTIYACIMIZ VAR
mongoose.connect(process.env.CONNECTION_URL,{
useNEWuRLParser:true,
useUnifiedTopology:true
}) 
.then(()=>{                // basarili baglantiysa then donuyor
 app.listen(PORT,()=>{
     console.log(`baba buyuksun:${PORT}`);
 });
})
.catch(error =>{            // hatali baglaniltiysa burasi donuyor
   console.log(error.massage);  // package.jsun start yaptik ve npm run start calistigini gorduk
});