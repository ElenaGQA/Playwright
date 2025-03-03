export class Pet {
    public type: string;
    public animalName: string;

    constructor(animalNname: string, type: string) {
        this.animalName = animalNname;
        this.type = type;
    }

    // public displayPet(): void {
    //     console.log(`Pet ${this.animalName}, type: ${this.type}`);
    // }
}
