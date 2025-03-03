import { Character, House } from "./character";

export class HouseManager {
    house: House;
    students: Character[] = [];

    constructor(house: House,) {
        this.house = house;
    }

    addMember(student: Character): void {
        if (student.house !== this.house) {
            console.log(`${student.name} is memeber of ${student.house} house`)
        }
        else {
            this.students.push(student)
            console.log(`${student.name} has joined ${this.house} house`)
        }
    }

    showStudents(): void {
        console.log(`House ${this.house}`);
        for (const student of this.students) {
            student.display();
        }
    }
}