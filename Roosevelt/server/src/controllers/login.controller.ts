import {Request,Response} from 'express';
import pool from '../database';

class LoginController {
    ini (req:Request,res:Response){

     //  const dat=  pool.query('SELECT * FROM business_data;')
//console.log(dat)
 //res.json(dat);
    }

public  getall(req:Request,res:Response){
const dat =  pool.query('SELECT * FROM business_data;')
   res.json(dat)
console.log(dat)
 } 


}

export const loginController = new LoginController();