import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";

export class Tram extends TransportationMethod {

    lineNumber: number;

    constructor(lineNumber: number) {
        super();
        this.lineNumber = lineNumber;
    }

    transport(person: Person, place: Place) {
        // seriously, is anyone buying ticket?
    }
}