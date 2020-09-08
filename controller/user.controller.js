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
        res.status(200).send({data})
    }).catch(erro=>{
        res.status(400).send(`Erro - ${erro}`)
    })
}

const getUserById = (req,res)=>{
    let id = {_id: req.params.id}
    User.findById(id, (erro,data)=>{
        if(erro){
            console.log(erro)
            return
        }
        console.log(data)
        return
    })

}

const putUser = (req, res)=>{
    let filter = {_id: req.params.id}
    let update = {
        email:"", password:""
    } // Nao deixar inserir NULO
    update = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOneAndUpdate(filter, update, {new:true}, (err,result)=>{
        if(err){
            res.status(400).send(`Error on findOneAndUpdate() - ${err}`)
            return
        }
        res.status(200).send(result)
        return
    })

}

const deleteUser = (req,res)=>{
    let id = {_id:req.params.id}
    User.findOneAndDelete(id, (err,response)=>{
        if(err){
            res.status(400).send(`Error in delete - ${err}`)
            return
        }
        res.status(200).send({response})
    })
}

// const putUser = (req,res)=>{
//     let id = req.params.id
//     User.
// }

module.exports={
    createUser:createUser,
    getUser:getUser,
    getUserById:getUserById,
    putUser:putUser,
    deleteUser:deleteUser
    // putUser:putUser
}