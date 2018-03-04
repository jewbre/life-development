import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";

export class Walk extends TransportationMethod {

    transport(person: Person, place: Place): any {
        person.energy = person.energy - 10;
    }
}