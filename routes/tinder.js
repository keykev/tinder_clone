const express = require('express')
const router = express.Router()

const Tinder = require('../modals/TinderCard')

router.get('/',(req,res) => {
    return res.status(200).send('Hello Kevin!')
})

//@POST         /tinder/card
//@desc         create a new tinder profile
router.post('/tinder/card', async(req,res) => {
    const name = req.body.name
    const imgURL = req.body.imgUrl
    try {
        const tinderUser = await Tinder.create({
            name,
            imgUrl: imgURL
        })
    
        if(!tinderUser) {
            res.status(500).send('can not create a tinder profile')
        }
        return res.status(200).send(tinderUser)
    }
    catch(err) {
        res.status(500).send('can not create a tinder profile')
    }
    
})

//@GET      /tinder/card
//@desc     get all of the profiles
router.get('/tinder/card', async(req,res) => {
    const profiles = await Tinder.find({})

    if(!profiles) {
        return res.status(500).send('Profiles not found')
    }
    return res.status(200).send(profiles)
})

module.exports = router;