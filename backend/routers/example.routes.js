const controllers=require('../controllers/example.controllers')
//const addEvent=require('../controllers/example.controllers')
const router=require('express').Router();
router.post('/scores', controllers.addScore);
router.post('/addEvent',controllers.addEvent)
module.exports=router;