import { json } from "body-parser";
import express, { Router } from "express";
import * as http from 'http';
import personRouter from "./routes/personRoutes";
import { CommonRoutesConfig } from "./utils/common.routes.config";

new (class Server {

    private app: express.Application = express();
    private server: http.Server = http.createServer(this.app);
    private routes: Array<CommonRoutesConfig> = [];

    constructor() {
        this.app.use(json());
        this.app.get("/", (_req, res) => { res.status(201).send("Olá, mais uma vez!"); });
        this.routes.push(new personRouter(this.app))
        this.server.listen(3000, () => {
            console.log(`express is listening on port ${3000}`);
            this.routes.forEach((route: CommonRoutesConfig) => {
                console.log(`Routes configured for ${route.getName()}`);
            });
        });
    }
})()