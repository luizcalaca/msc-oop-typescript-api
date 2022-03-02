import { Request, Router } from 'express';

import {personController} from '../controllers/personController';

export default class personRouter {

    readonly router = Router();

    execute(): Router{
       this.router.get('/person', new personController().getAll);
       return this.router
    }
    

}





//router.post('/', personController.push);

//export default router;