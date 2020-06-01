//Imports
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

//Routage
router.post("/create",auth, postCtrl.create);
router.get("/", auth,postCtrl.listMsg);

module.exports = router;