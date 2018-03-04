import { Person } from "../base/Person";
import { Place } from "../base/Place";

export class RandomPerson extends Person {

    constructor() {
        super();
        const randomPeopleNames = [
            'Marko',
            'Pero',
            'Ismet',
            'Đurđa'
        ];

        this.name = randomPeopleNames[Math.floor(Math.random() * randomPeopleNames.length)];
    }

    canWalk(): boolean {
        return true;
    }

    walk() {

    }

    wakeUp() {
    }

    cry() {
    }

    smile() {
    }

    turnSad() {
    }

    goTo(place: Place) {
    }

    goToWork() {
    }

    sleep(numberOfHours: number) {
    }

    work() {
    }
}