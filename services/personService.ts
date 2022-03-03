import { Person } from "../models/person";

class personService {

    private personArray: Person[];

    constructor(){
        this.personArray = []
    }

    public push(person: Person) {
        this.personArray.push(person)
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
        console.log(this.personArray);
        return this.personArray
    }
}

export default new personService();