"use strict";
const { userAction } = require("../../actions/userActions");
const { BaseController } = require("../baseController");

class UserController extends BaseController {
  constructor(req, res) {
    super(req, res);
  }

  async userSignup() {
    try {
      const payload = await userAction.userSignup(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }

  async userLogin() {
    try {
      const payload = await userAction.userLogin(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }

  async userLogout() {
    try {
      const payload = await userAction.userLogout(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }

  async homePage() {
    try {
      const payload = await userAction.homePage(this.models, this.reqBody);
      this.respondWithSuccess(payload);
    } catch (err) {
      console.log(err);
      this.respondWithError(err);
    }
  }
}

module.exports.UserController = {
  userSignup: async (req, res) => {
    return new UserController(req, res).userSignup();
  },
  userLogin: async (req, res) => {
    return new UserController(req, res).userLogin();
  },
  userLogout: async (req, res) => {
    return new UserController(req, res).userLogout();
  },
  homePage: async (req, res) => {
    return new UserController(req, res).homePage();
  },
};
