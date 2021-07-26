import express from 'express';
import{getPosts} from '../controllers/posts.js'; //back tarafind ajs yaz onemli err module not found hatasu

const router =express.Router();

//http://locaalhost:5000/pstst
//GET POST DELETE UPDTE PATCH

router.get('/',getPosts) ;    // '/' olunca kontrol cagiriyoruz once control import ediliyor





export default router;