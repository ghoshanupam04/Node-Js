const {URL}=require('../Model/user')
const shortid=require('shortid')

async function GenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({msg:`Url is required.`})
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        RedirectURL:body.url,
        VisitHistory:[],
    })
    return res.json({id:shortId})
}
async function GetShortUrl(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        VisitHistory:{timestamp:Date.now()}
    }}
    )
    res.redirect(entry.RedirectURL)
}

module.exports={
    GenerateNewShortURL,GetShortUrl,
}