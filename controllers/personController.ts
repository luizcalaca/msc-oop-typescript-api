import { Person } from "../models/person";
import { personService } from "../services/personService";
import {CRUD} from './interfaceCRUD';
import express from 'express';

export class personController implements CRUD<Person>{

    private personService: personService = new personService()

    public push(req: express.Request, res: express.Response): void{
        const person: Person = req.body as unknown as Person
        this.personService.push(person)
        res.status(200).send(this.personService);
    }

    public pop(req: express.Request, res: express.Response){
        this.personService.pop()
        res.status(204).send(``);
    }

    public getAll(req: express.Request, res: express.Response) {
        const allperson = this.personService.getAll()
        res.status(200).send(allperson);
    }
}