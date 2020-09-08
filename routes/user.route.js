const express =require('express');
const userController= require('../controller/user.controller')

const route = express.Router();

route.post('/user',userController.createUser);

route.get('/user',userController.getUser)

route.get('/user/:id',userController.getUserById)

route.put('/user/:id',userController.putUser)

route.delete('/user/:id',userController.deleteUser)


// route.put('/user/:id', userController.putUser)

module.exports= route;
