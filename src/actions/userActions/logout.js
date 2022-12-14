"use strict"

const { BadRequestError } = require('../../errors');

const app = require('./firebaseConfig')
const { getAuth, signOut } = require('firebase/auth')

const auth = getAuth();

module.exports.userLogout = async (models, body) => {

    if(!auth.currentUser){
        throw new BadRequestError("user not logged in")
    }
    
    const logout = await signOut(auth);
    
    return Promise.resolve(logout);
}
