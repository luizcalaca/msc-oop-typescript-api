import { Person } from "../models/person";
import { personService } from "../services/personService";
import {CRUD} from './interfaceCRUD';

export class personController implements CRUD<Person>{

    private personService: personService = new personService()

    public push(req: Request, res: Response): void{
        const person: Person = req.body as unknown as Person
        this.personService.push(person)
    }

    public pop(): Person{
        return this.personService.pop();
    }

    public getAll(): Person[] {
        return this.personService.getAll()
    }
}