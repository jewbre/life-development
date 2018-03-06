import { Place } from "./Place";
import { TransportationMethod } from "./TransportationMethod";

export abstract class Person {
    name: string;
    age: number;
    gender: string;
    state: string;
    energy: number;

    think(thought: string) {
        console.log(`
${this.name} is thinking: ${thought}
        `);
    }

    abstract goTo(place: Place, transportationMethod: TransportationMethod): void;

    abstract goToWork(): void;

    abstract sleep(numberOfHours: number): void;

    abstract wakeUp(): boolean;

    abstract work(numberOfHours: number): void;

    abstract eat(): void;

}