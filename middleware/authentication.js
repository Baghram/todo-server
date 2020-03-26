const jwt = require('jsonwebtoken')
const { User } = require('../models')


module.exports = function(req, res, next) {
    const access_token = req.headers.access_token
    const authenticated = jwt.verify(access_token, process.env.JWT_SECRET) //Token_JWT(JWT_SECRET) buat nya di web jwt.io(generate code)
    req.authenticated = authenticated
   
    User.findOne({
        where:{
            id: authenticated.id
        }
    })
        .then(function(result) {
            if(result) {
                req.id = result.id
                next()
            }
            else{
                let err = {
                    message: "Authentication Failed"
                }
                throw err
            }
            
        })
        .catch(function(err) {
            next(err)
        })

        // localStorage.getItem('access_token')
    
}


