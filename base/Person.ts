import { Place } from "./Place";

export abstract class Person {
    name: string;
    age: number;
    energy: number;
    state: string;

    think(thought: string) {
        console.log(`
${name} is thinking: ${thought}
        `);
    }

    abstract canWalk(): boolean;

    abstract walk(): void;

    abstract wakeUp(): void;

    abstract cry(): void;

    abstract smile(): void;

    abstract turnSad(): void;

    abstract goTo(place: Place): void;

    abstract goToWork(): void;

    abstract sleep(numberOfHours: number): void;

    abstract work(): void;

}