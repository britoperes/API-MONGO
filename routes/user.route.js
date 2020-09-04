const express =require('express');
const userController= require('../controller/user.controller')

const route = express.Router();

route.post('/user',userController.createUser);

module.exports= route;