const controllers=require('../controllers/example.controllers')
// const addEvent=require('../controllers/example.controllers')
const userControllers = require("../controllers/userOperations")

const router=require('express').Router();

router.post('/scores', controllers.addScore);
router.post('/addEvent',controllers.addEvent);
router.post('/signup', userControllers.createUser)

module.exports=router;
