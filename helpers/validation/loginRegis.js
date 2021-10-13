const { validateEmail, validateDate } = require('../regex')

const validationRegis = (data) => {
    
    const error = []

    if(!data.name){
        error.push("Name can not be null")
    }
    
    if(data.name.length < 3){
        error.push("Minimal 6 caracter for Name")
    }
    
    if(!data.dob){
        error.push("Date of Birth can not be null")
    }

    if(!validateDate(data.dob)){
        error.push("Format date should be YYYY-MM-DD")
    }

    if(!data.gender){
        error.push("Gender can not be null")
    }
    
    if(!data.email){
        error.push("Email can not be null")
    }

    if(!validateEmail(data.email)){
        error.push("Format email false")
    }
        
    if(!data.password){
        error.push("Password can not be null")
    }

    if(data.password.length < 6){
        error.push("Minimal 6 caracter for Password")
    }

    return error
}

const validationLogin = (data) => {
    
    const error = []

    if(!data.email){
        error.push("Email can not be null")
    }

    if(!validateEmail(data.email)){
        error.push("Format email false")
    }
    
    if(!data.password){
        error.push("Password can not be null")
    }

    if(data.password.length < 6){
        error.push("Minimal 6 caracter for Password")
    }

    return error
}

module.exports = { validationRegis, validationLogin }