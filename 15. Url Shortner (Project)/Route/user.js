const express=require('express');
const router=express.Router();
const {GenerateNewShortURL,GetShortUrl}=require('../Controller/user')
router.post('/',GenerateNewShortURL)
router.get('/:shortId',GetShortUrl)

module.exports=router;