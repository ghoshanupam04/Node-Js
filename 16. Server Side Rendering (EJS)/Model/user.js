const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    shortId: {
        required: true,
        unique: true,
        type: String,
    },
    RedirectUrl: {
        required: true,
        type: String,
    },
    VisitHistory: [{ timestamps: { type: Number } }]
}, { timestamps: true })

//Model:
const URL = mongoose.model('url', User_Schema);

module.exports = {
    URL,
}