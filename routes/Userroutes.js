const express = require('express');
const {deletedata , createdata , updatedata , getdata}  = require('../controllers/UserController');
const router = express.Router()

router.post('/',createdata);
router.get('/',getdata);
router.put('/:id',updatedata);
router.delete('/:id', deletedata);

module.exports = router