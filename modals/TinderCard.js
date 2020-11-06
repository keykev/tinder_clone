const mongoose = require('mongoose')


const TinderSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    imgUrl: {
        type:String,
        required:true
    }
})


const Tinder = mongoose.model('Tinder',TinderSchema)

module.exports = Tinder;