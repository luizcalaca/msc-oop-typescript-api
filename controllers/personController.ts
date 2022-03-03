import { Person } from "../models/person";
import personService from "../services/personService";
import {CRUD} from './interfaceCRUD';
import express from 'express';
import debug from 'debug';

const log: debug.IDebugger = debug('app:person-controller');
export class personController implements CRUD<Person>{

    public push(req: express.Request, res: express.Response): void{
        log(personService.push(req.body))
        res.status(200).send(personService);
    }

    public pop(req: express.Request, res: express.Response){
        personService.pop()
        res.status(204).send(``);
    }

    public getAll(req: express.Request, res: express.Response) {
        const allperson = personService.getAll()
        res.status(200).send(allperson);
    }
}