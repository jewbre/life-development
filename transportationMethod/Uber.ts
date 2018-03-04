import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";
import { RandomPerson } from "../people/RandomPerson";

export class Uber extends TransportationMethod {

    driver: Person;

    constructor() {
        super();
        this.driver = new RandomPerson();
    }

    transport(person: Person, place: Place) {
        // damn, this is going to cost some money :(
    }
}