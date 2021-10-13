const errorHandler = (err,req,res,next) => {
    let errStatus
    let errMsg = []

    if(Array.isArray(err.name)){
        return res.status(401).json({success: false, errMsg:err.name})
    }

    switch (err.name) {
        case 'MISSING_ACCESS_TOKEN':
            errStatus = 401
            errMsg.push('Access token not found')
            break;
        case 'INVALID_ACCESS_TOKEN':
            errStatus = 401
            errMsg.push('Access token invalid')
            break;
        case 'MISSING_USER':
            errStatus = 401
            errMsg.push('user not found')
            break;
        case 'AUTHORIZATION_NOT_VALID':
            errStatus = 401
            errMsg.push('Anda tidak punya akses. silahkan hubungi admin')
            break;
        case 'LOGIN_FAIL':
            errStatus = 401
            errMsg.push('Username and password false')
            break;
        case 'DATA_NOT_FOUND':
            errStatus = 404
            errMsg.push('Data not found')
            break;
        case 'DUPLICATE_EMAIL':
            errStatus = 409
            errMsg.push('email already registered')
            break;
        default:
            errStatus = 500
            errMsg.push('Internal server error')
    }

    res.status(errStatus).json({success: false, errMsg})
}

module.exports = errorHandler  