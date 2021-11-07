const userController = require("../controller/userController");

const { Router } = require("express");
const router = Router();

router.post('/scoredata',userController.scoredata);

module.exports=router;
