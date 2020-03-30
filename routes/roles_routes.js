const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.Roles.create({
        text: req.body.text,
        UserId: req.body.UserId
    }).then(newRol => res.send(newRol))
});

router.get('/find/:id', (req, res) => {
    db.Roles.findAll({
        where: { UserId: req.params.id},
        include: [db.User]
    }).then(rol => res.send(rol));
});

module.exports = router;