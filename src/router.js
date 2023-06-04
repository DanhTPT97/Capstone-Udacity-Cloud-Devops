const express = require('express');
const Controller = require('./controller');

const router = express.Router();

router.get('/posts', Controller.getPosts);

module.exports = router;
