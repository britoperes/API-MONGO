const User = require('../schema/user.schema')

const createUser= (req, res)=>{
    const body =req.body;
    
    User.create(body).then(data=>{
        res.status(200).send({_id:data._id});
    }).catch(e=>{
        res.status(400).send({error:e})
    })
    
}

module.exports={
    createUser:createUser
}