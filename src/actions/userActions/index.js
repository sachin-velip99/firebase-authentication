const { userSignup } = require('./signup');
const { userLogin } = require('./login')
const { userLogout } = require('./logout')
const { homePage } = require('./protected')
const { passwordReset } = require('./passwordReset')


module.exports.userAction = {
    userSignup,
    userLogin,
    userLogout,
    homePage,
    passwordReset,
}