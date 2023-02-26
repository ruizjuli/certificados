import {Router} from 'express'
import {loginController} from '../controllers/login.controller';

class LoginRoutes{
    router: Router = Router();

    constructor(){
this.config();
    }

    config():void {
        this.router.get('/',loginController.getall);
        this.router.post('/',loginController.ini);
        this.router.post('/',loginController.ini);
        this.router.delete('/',loginController.ini);
        this.router.put('/',loginController.ini);

    }
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;