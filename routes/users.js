const router = require("express").Router()
let User = require("../models/user")

router.route("/").get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`ERROR - ${err}`))
})

router.route("/add").post((req,res) => {
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
        .then(() => res.json("USER ADDED"))
        .catch(err => res.status(400).json(`ERROR ${err}`))
})

module.exports = router