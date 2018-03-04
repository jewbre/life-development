import { Person } from "./Person";
import { Place } from "./Place";

export abstract class TransportationMethod {

    abstract transport(person: Person, place: Place): any;
}