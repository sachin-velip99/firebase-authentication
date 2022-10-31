"use strict"

const { BadRequestError } = require('../../errors');


const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')
const auth = getAuth();


module.exports.userLogin = async (models, body) => {

    await validateReqBody(body);

    try{
    var user = await signInWithEmailAndPassword(auth, body.email, body.password)
    }
    catch(error){
        throw new BadRequestError(error);
    }

    return Promise.resolve(user);
};

const validateReqBody = async (body) => {
    if (!Object.keys(body).length > 0) {
        throw new BadRequestError("Req body missing");
    }
    if (!body.email) {
        throw new BadRequestError("email property missing in reqBody");
    }
    try {
        if (!body.password) {
            throw new BadRequestError("password property missing in reqBody");
        }
    }
    catch (err) {
        throw new BadRequestError(err)
    }
};

