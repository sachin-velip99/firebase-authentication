"use strict"
//only logged in users can access this

const { BadRequestError } = require('../../errors');

const app = require('./firebaseConfig')
const { getAuth } = require('firebase/auth')

const auth = getAuth();

module.exports.homePage = async (models, body) => {
    if(!auth.currentUser){
        throw new BadRequestError("user not authenticated")
    }

    const user = auth.currentUser
    
    return Promise.resolve(user);
}