import { Place } from "./Place";

export abstract class Person {
    name: string;

    think(thought: string) {
        console.log(`
${name} is thinking: ${thought}
        `);
    }

    abstract goTo(place: Place): void;

    abstract goToWork(): void;
}