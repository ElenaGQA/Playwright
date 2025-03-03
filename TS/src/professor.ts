import { Character, House } from "./character";

export class Professor extends Character {
    constructor(name: string, house: House, magicalStrength: number) {
        super(name, house, magicalStrength);
    }

    boostStrength(): void {
        this.magicalStrength += 10;
    }
}