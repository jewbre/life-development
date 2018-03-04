import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";

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

    goTo(place: Place, transportationMethod: TransportationMethod): void {
    }

    goToWork() {
    }
}