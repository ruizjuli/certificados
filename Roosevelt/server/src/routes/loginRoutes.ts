import {Router} from 'express'

class LoginRoutes{
    router: Router = Router();

    constructor(){
this.config();
    }

    config():void {
        this.router.get('/',(req,res)=>res.send("Iniciando sesion"));
    }
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;