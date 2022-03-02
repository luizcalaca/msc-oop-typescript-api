import { Person } from "../models/person";
import { personService } from "../services/personService";

export class personController {

    private personService: personService = new personService()

    public push(req: Request, _res: Response){
        const person: Person = req.body as unknown as Person
        this.personService.push(person)
    }

    public pop(_req: Request, _res: Response){
        this.personService.pop()
    }

    public getAll(_req: Request, _res: Response){
        this.personService.getAll()
    }
}