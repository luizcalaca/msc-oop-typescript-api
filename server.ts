import { json } from "body-parser";
import express, { Router } from "express";
import { personController } from "./controllers/personController";
import personRouter from "./routes/personRoutes";


new (class Server {

    private app = express();
    private personRouter = new personRouter()

    constructor() {
        this.app.use(json());
        this.app.get("/", (_req, res) => { res.status(201).send("Olá, mais uma vez!"); });
        this.app.use("/person", this.personRouter.execute )
        this.app.listen(3000, () => {
            console.log(`express is listening on port ${3000}`);
        });
    }
})()