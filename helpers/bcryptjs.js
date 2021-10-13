const bcrypt = require('bcryptjs');

const bcryptjs = (password) => {
    
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

module.exports = { bcryptjs }