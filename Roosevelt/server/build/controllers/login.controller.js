"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    ini(req, res) {
        //  const dat=  pool.query('SELECT * FROM business_data;')
        //console.log(dat)
        //res.json(dat);
    }
    getall(req, res) {
        const dat = database_1.default.query('SELECT * FROM business_data;');
        res.json(dat);
        console.log(dat);
    }
}
exports.loginController = new LoginController();
