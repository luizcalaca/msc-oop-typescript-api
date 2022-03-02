import { Person } from "../models/person";

export class personService {

    private personArray: Person[];

    constructor(){
        this.personArray = []
    }

    public push(person: Person): void {
        this.personArray.push(person)
    }

    public pop(): Person {
       return this.personArray.pop() as Person
    }

    public getAll(): Person[]{
        return this.personArray
    }
}