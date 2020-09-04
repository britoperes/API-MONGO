const User = require('../schema/user.schema')

const createUser= (req, res)=>{
    const body =req.body;
    
    User.create(body).then(data=>{
        res.status(200).send({_id:data._id});
    }).catch(e=>{
        res.status(400).send({error:e})
    })
    
}

const getUser = (req,res)=>{
  /*   User.find(data=>{
        res.status(200).send({data})
    }).catch(error=>{
        res.status(400).send({error})
    }) */
    User.find({}).then(data=>{
        console.log({data})
    })
}

module.exports={
    createUser:createUser,
    getUser:getUser
}