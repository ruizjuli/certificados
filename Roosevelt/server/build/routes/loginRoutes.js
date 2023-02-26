"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', login_controller_1.loginController.getall);
        this.router.post('/', login_controller_1.loginController.ini);
        this.router.post('/', login_controller_1.loginController.ini);
        this.router.delete('/', login_controller_1.loginController.ini);
        this.router.put('/', login_controller_1.loginController.ini);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
