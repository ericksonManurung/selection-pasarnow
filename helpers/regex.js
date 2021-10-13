// regex date yyyy-mm-dd
const validateDate = (input) => {

    if(!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input)){
        return false
    }
    return true
}

// regex onlyNumeric
const validateOnlyNumeric = (input) => {

    if(!/^[0-9]+$/.test(input)){
        return false
    }
    return true
}

// regex email
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = { validateEmail, validateDate }