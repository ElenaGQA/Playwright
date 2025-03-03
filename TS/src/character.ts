import { Pet } from "./pets";
export type House = "Gryffindor" | "Ravenclaw" | "Hufflepuff" | "Slytherin";

export class Character {
    public name: String;
    public house: House;
    protected magicalStrength: number;
    private pet?: Pet;


    constructor(name: String, house: House, magicalStrength: number, pet?: Pet) {
        this.name = name;
        this.house = house;
        this.magicalStrength = magicalStrength;
        this.pet = pet;
    }

    castSpell(spell: String) {
        console.log(`${this.name} casts ${spell}`);
        this.magicalStrength++;
    } // this method dynamically change our object

    display(): void {
        console.log(`${this.name} is a memmber of ${this.house} house and has ${this.magicalStrength}% of magical strength`);
    }

    startQuest(): void {
        if (this.pet) {
            console.log(`${this.name} has a ${this.pet.type} with the name ${this.pet.animalName} and they will go on a quest together.`)
        }
        else {
            console.log(`${this.name} does not have a pet and will be doing quest alone`)
        }
    }
}
// class is a bluprint. A constructor is a method inside a class we use to initialize object properties when an instance of
// the class is created, in our case in index.ts

