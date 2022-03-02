import { Person } from "../models/person";

export class personService {

    private personArray: Person[];

    constructor(){
        this.personArray = []
    }

    public async push(person: Person) {
        await this.personArray.push(person)
    }

    public pop(): Person {
       return this.personArray.pop() as Person
    }

    public getAll(): Person[] {
        let person: Person = {
            name: "Luiz",
            age: 10
        }
        this.personArray.push(person)
        return this.personArray
    }
}