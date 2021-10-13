const jwt = require('jsonwebtoken')
const { getDatabase } = require('../config/connection')

const authentication = (req,res,next) => {
    if (!req.headers.token) {
        throw{ name: "MISSING_ACCESS_TOKEN" }  
    }else{
        try{
            const decode = jwt.verify(req.headers.token, process.env.JWT_SECREAT)
            req.UserId = decode.id
            next()
        }catch(err){
            console.log(err)
            throw{ name: "INVALID_ACCESS_TOKEN" }
        }
    }
}


module.exports = { authentication }