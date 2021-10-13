const { getDatabase } = require('../config/connection')
const { validationTodo } = require("../helpers/validation/todo")
const { ObjectId } = require('mongodb')

class TodoController {
    
    static async readTodo (req,res,next) {
        try{
            const todo = await getDatabase().collection("todos").find({UserId:req.UserId}).toArray()
            res.status(200).json({success: true, data: todo})
        }catch(err){
            next(err)
        }     
    }
    
    static async createTodo (req,res,next) {
        try{
            // VALIDATION
            const checkValidation = await validationTodo(req.body)
            if (checkValidation.length){
                throw { name: checkValidation }
            }
            
            const dataTodo = {
                UserId: req.UserId,
                title: req.body.title,
                description: req.body.description,
                status: "pending"
            }
            await getDatabase().collection("todos").insertOne(dataTodo)
            res.status(201).json({success:true, message: "success add todo"})
        }catch(err){
            next(err)
        }        
    }

    static async putTodo (req,res,next) {
        try{
            // VALIDATION
            const checkValidation = await validationTodo(req.body)
            if (checkValidation.length){
                throw { name: checkValidation }
            }

            await getDatabase().collection("todos").updateOne({_id: ObjectId(req.params.id)},{$set:req.body})
            res.status(200).json({success:true, message:"success update todo"})
        }catch(err){
            next(err)
        }
    }

    static async patchTodo (req,res,next) {
        try{
            await getDatabase().collection("todos").updateOne({_id: ObjectId(req.params.id)},{$set:{status: "done"}})
            res.status(200).json({success:true, message:"status todo update to done"})
        }catch(err){
            next(err)
        }
    }

    static async deleteTodo (req,res,next) {
        try{
            await getDatabase().collection("todos").remove({_id:ObjectId(req.params.id)})
            res.status(200).json({success:true, message:"success delete todo"})
        }catch(err){
            next(err)
        }
    }

}

module.exports = TodoController