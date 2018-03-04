import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";

export class Bus extends TransportationMethod {
    lineNumber: number;

    constructor(lineNumber: number) {
        super();
        this.lineNumber = lineNumber;
    }

    transport(person: Person, place: Place) {
        // I am not buying tickets, so free ride, wohoo
    }
}