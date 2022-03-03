import express from 'express';
import { personController } from '../controllers/personController';
import personMiddleware from '../middleware/person.middleware';
import { CommonRoutesConfig } from '../utils/common.routes.config';

export default class personRoutes extends CommonRoutesConfig{

    app: express.Application;

    constructor(app: express.Application) {
        super(app, 'personRoutes');
        this.app = app;
        this.configureRoutes();
    }

    configureRoutes() {
       this.app.route(`/users`)
            .get(new personController().getAll)
            .post(personMiddleware.validateRequiredUserBodyFields, 
                new personController().push);

            return this.app;
    }
}