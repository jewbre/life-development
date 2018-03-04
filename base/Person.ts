import { Place } from "./Place";
import { TransportationMethod } from "./TransportationMethod";

export abstract class Person {
    name: string;

    think(thought: string) {
        console.log(`
${this.name} is thinking: ${thought}
        `);
    }

    abstract goTo(place: Place, transportationMethod: TransportationMethod): void;

    abstract goToWork(): void;
}