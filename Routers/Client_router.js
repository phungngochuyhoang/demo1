const express = require("express");

const router = express.Router();

const controller = require("../Controllers/Client_controller");


router.get("/", controller.get_home);


module.exports = router;
