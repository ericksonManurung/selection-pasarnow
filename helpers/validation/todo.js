const validationTodo = (data) => {
    
    const error = []

    if(!data.title){
        error.push("Title can not be null")
    }
    
    if(!data.description){
        error.push("Description can not be null")
    }

    return error
}

module.exports = { validationTodo }