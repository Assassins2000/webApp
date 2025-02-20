const express = require('express');
const router = express.Router();
const validateChangeBalance = require('../middlewares/validateChangeBalanceSchema');
const UserController = require('../controllers/userController');

const userController = new UserController();

router.put('/changeBalance', validateChangeBalance, (req, res) => userController.changeBalance(req, res));

module.exports = router;