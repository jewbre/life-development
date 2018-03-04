import { Place } from "./Place";
import { TransportationMethod } from "./TransportationMethod";

export abstract class Person {
    name: string;
    age: number;
    hairColor: string;
    siblings: Person[];
    hobies: string[];
    energy: number;
    state: string;

    think(thought: string) {
        console.log(`
${this.name} is thinking: ${thought}
        `);
    }

    abstract goTo(place: Place, transporationMethod: TransportationMethod): void;

    abstract goToWork(): void;

    abstract write(): void;

    abstract sleep(numberOfHours: number): void;

    abstract wakeUp(): boolean;

    abstract walk(): void;

    abstract smile(): void;

    abstract turnSad(): void;

    abstract climb(place: Place): void;
}