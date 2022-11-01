"use strict"

const { BadRequestError } = require('../../errors');

const app = require('./firebaseConfig')
const { getAuth, createUserWithEmailAndPassword, updateProfile } = require('firebase/auth')

const auth = getAuth();


module.exports.userSignup = async (models,body) => {
  
    await validateReqBody(body, models);

    try{
      await createUserWithEmailAndPassword(auth, body.email, body.password)
    }
    catch(error){
      throw new BadRequestError(error)
    }

    

    try{
      await updateProfile(auth.currentUser, {displayName: body.username})
    }
    catch(error){
      throw new BadRequestError(error);
    }
    

    return Promise.resolve(auth.currentUser);
};

const validateReqBody = async (body, models) => {
    if (!Object.keys(body).length > 0) {
      throw new BadRequestError("Req body missing");
    }
    if (!body.username) {
      throw new BadRequestError("username property missing in reqbody")
    }
    if (!body.email) {
      throw new BadRequestError("email property missing in reqBody");
    }
    if (!body.password) {
        throw new BadRequestError("password property missing in reqBody");
    }
  };