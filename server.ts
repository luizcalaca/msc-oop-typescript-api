import { json } from "body-parser";
import express from "express";


class Server {

    private app = express()

    constructor(){
        this.app.use(json())
        this.app.get("/", (req, res) => {res.status(201).send("Olá!")})
    }
}

new Server()