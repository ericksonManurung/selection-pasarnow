const { getDatabase } = require('../config/connection')
const { validationRegis, validationLogin } = require('../helpers/validation/loginRegis')
const { bcryptjs } = require('../helpers/bcryptjs')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    
    static async regis (req,res,next){  
        try{
            // VALIDATION FORM
            const checkValidation = await validationRegis(req.body)
            if (checkValidation.length){
                throw { name: checkValidation }
            }
            // VALIDATION DUPLIKAT EMAIL
            const checkDuplicate = await getDatabase().collection('users').findOne({ email: req.body.email})
            if(checkDuplicate){
                throw { name: "DUPLICATE_EMAIL"}
            }

            const data = {
                name: req.body.name,
                dob: req.body.dob,
                gender: req.body.gender,
                email: req.body.email,
                password: bcryptjs(req.body.password),
            }

            const user = await getDatabase().collection('users').insertOne(data)
            res.status(200).json({success:true, message:"success register.."})
        }catch(err){
            next(err)
        }
    }
    
    static async login (req,res,next){
        try{
            const { email, password } = req.body

            // VALIDATION FORM
            const checkValidation = await validationLogin(req.body)
            if (checkValidation.length){
                throw { name: checkValidation }
            }

            const user = await getDatabase().collection('users').findOne({ email })
            if(user && bcrypt.compareSync(password, user.password)){
                const token = jwt.sign({id:user._id, name:user.name}, process.env.JWT_SECREAT)
                res.status(200).json({success:true, message:'success login..', token})
            }else{
                throw { name: "LOGIN_FAIL"}
            }            
        }catch(err){
            next(err)
        }
    }

}





module.exports = UserController