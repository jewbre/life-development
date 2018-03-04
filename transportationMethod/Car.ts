import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";

export class Car extends TransportationMethod {

    type: string;

    constructor(type: string) {
        super();
        this.type = type;
    }

    transport(person: Person, place: Place) {
        // wohoo, driving :D
        // But need to find a parking place :(
    }
}