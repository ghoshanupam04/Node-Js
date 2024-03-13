const express = require('express');
const router = express.Router();
const { GenerateUrl,GetTheUrl } = require('../Controller/user')

router.post('/', GenerateUrl)
router.get('/:shortId',GetTheUrl )

module.exports = router;