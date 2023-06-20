let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Game = require('../models/game');

// Get route fo the Game list page
router.get('/', async (req, res, next) => {
    try {
        let gameList = await Game.find();
        //console.log(gameList)

        res.render('game/list', {title: 'Game List', GameList: gameList})
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;