import { Person } from "./Person";

export class Life {

    private static instance: Life = null;
    private people: Person[] = [];

    private constructor() {

    }

    public static getInstance() {
        if (Life.instance === null) {
            Life.instance = new Life();
        }

        return Life.instance;
    }

    public addPerson(person: Person) {
        this.people.push(person);
    }

    public killPerson(person: Person) {
        this.people = this.people.filter((p) => p != person);
    }

    public isItRaining() {
        return Math.random() > 0.5;
    }

    public getTemperature() {
        return Math.round(Math.random() * 30);
    }

    public getTime() {
        return Math.floor(Math.random() * 24);
    }

    public getYear() {
        return 2018;
    }
}