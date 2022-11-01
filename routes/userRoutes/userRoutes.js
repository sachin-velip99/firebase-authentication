"use strict";

const {
  UserController,
} = require("../../src/controllers/userController/userController");
const { baseRouteUrl } = require("../globalVariables");

const UserRoutes = (app, auth) => {
  app.post(`${baseRouteUrl}/users/signup`, UserController.userSignup);
  app.post(`${baseRouteUrl}/users/login`, UserController.userLogin);
  app.get(`${baseRouteUrl}/users/logout`, UserController.userLogout);
  app.get(`${baseRouteUrl}/users/homePage`, UserController.homePage);
};

module.exports = UserRoutes;
