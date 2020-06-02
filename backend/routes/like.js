//Imports
const express = require('express');
const router = express.Router();
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

//Routage
router.post("/like", auth, likeCtrl.like);
router.post("/dislike", auth, likeCtrl.disLike);


module.exports = router;