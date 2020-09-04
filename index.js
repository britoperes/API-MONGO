const mongoose= require('mongoose');
const express = require('express');
const contants= require('./config/constants');
const userRouter= require('./routes/user.route')
const app =express();
const paramsMongoose = {useNewUrlParser: true,
    useUnifiedTopology: true  }

const middleware =()=>{
    app.use(express.json());
    app.use(userRouter);
}

const mongoConnect =()=>{
    mongoose.connect(contants.mongo,paramsMongoose,(error)=>{
        if(error){
            console.log('error to connect');
            return;
        }
        middleware();
        app.listen(contants.port,()=>{
            console.log(`app run in port ${contants.port}`)
        })
    })
}

mongoConnect();



git config --global user.email "britoperes@icloud.com"
git config --global user.name "João Pedro Brito Peres"