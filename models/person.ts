interface PersonDTO {
    name: string,
    age: number
}

export class Person implements PersonDTO {
    name: string;
    age: number;
    
    constructor(){
        this.name = ""
        this.age = 0
    }
}