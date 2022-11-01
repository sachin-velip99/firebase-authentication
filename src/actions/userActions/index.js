const { userSignup } = require('./signup');
const { userLogin } = require('./login')
const { userLogout } = require('./logout')
const { homePage } = require('./protected')


module.exports.userAction = {
    userSignup,
    userLogin,
    userLogout,
    homePage
}