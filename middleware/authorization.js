const { Todo } = require('../models')


module.exports = function(req, res, next) {
    console.log(req.params.id)
    console.log(req.id)
    console.log('authorization')
    Todo.findByPk(req.params.id)
        .then(function(result) {
            console.log(result)
            console.log(result.UserId, req.id)
            if(result.UserId == req.id) {
                next()
            }
            else{
                let err = {
                    message: "UnAuthorized"
                }
                throw err
            }
            
        })
        .catch(function(err) {
            res.status(500).json(err)
        })
    }