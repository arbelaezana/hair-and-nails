const express = require('express');
const userLogin = require('../controllers/userLogin')

const router = express.Router();

router.get('/', userLogin.getUser);
router.post('/saveUser', userLogin.postUser),

module.exports = router;
