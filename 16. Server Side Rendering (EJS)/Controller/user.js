const { URL } = require('../Model/user')
const shortid = require('shortid')
//create ShortUrl:
async function GenerateUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ msg: `Url Not Found.` });
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        RedirectUrl: body.url,
        VisitHistory: []
    })
    return res.render('home',{
        id: shortId
    })
    //return res.status(201).json({ Short_URL: shortId })
}
//Get the Output:
async function GetTheUrl(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            VisitHistory: { timestamps: Date.now() }
        }
    }
    )
    res.redirect(result.RedirectUrl)
}

module.exports = {
    GenerateUrl, GetTheUrl
}