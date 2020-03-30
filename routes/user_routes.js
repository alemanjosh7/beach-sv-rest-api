const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser));
});

router.get('/all', (req, res) => {
    db.User.findAll({
        include: [db.Profile, db.Roles]
    }).then(allUsers => { 
        res.send(allUsers)
    });
})
router.delete("/delete/:id", (req, res) => {
    db.User.destroy({
        where: { UserId: req.params.id }
    }).then(() => res.send('success'));
})

module.exports = router;