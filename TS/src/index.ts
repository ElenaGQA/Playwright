import { Character, House } from "./character";
import { HouseManager } from "./house_manager";
import { Professor } from "./professor";
import { Pet } from "./pets";

const hedwig = new Pet("Hedwig", "Owl")
const harry = new Character("Harry Potter", "Gryffindor", 90, hedwig);
const hermione = new Character("Hermione Granger", "Gryffindor", 100);
const draco = new Character("Draco Malfoy", "Slytherin", 85);
const cedric = new Character("Cedric Diggory", "Hufflepuff", 80);
const snape = new Professor("Severus Snape", "Slytherin", 100);

const griffindorManager = new HouseManager("Gryffindor");
griffindorManager.addMember(harry);
griffindorManager.addMember(hermione);
griffindorManager.addMember(cedric);
griffindorManager.showStudents();

const slytherinManager = new HouseManager("Slytherin");
slytherinManager.addMember(draco)
slytherinManager.addMember(snape)

snape.boostStrength()
snape.display();

harry.display();
harry.castSpell("Accio");
harry.display();

harry.startQuest();
draco.startQuest();