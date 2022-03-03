import express from 'express';

class PersonMiddleware {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.name && req.body.age) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields name and age`});
        }
    }
}

export default new PersonMiddleware();