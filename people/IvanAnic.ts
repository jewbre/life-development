import { Life } from "../base/Life";
import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";
import { Infinum } from "../places/Infinum";
import { Tram } from "../transportationMethod/Tram";
import { Uber } from "../transportationMethod/Uber";

export class IvanAnic extends Person {

    constructor() {
        super();
        this.name = 'Petar';
        this.age = 18;
        this.gender = 'Bender';
        this.energy = 110;
    }

    goTo(place: Place, transportationMethod: TransportationMethod): void {
    }

    goToWork(): void {
        const workPlace = new Infinum();

        // HAAAAAAAAAAAAAAAACKK!!!
        const a = Life.getInstance().isItRaining();
        const temperature = Life.getInstance().getTemperature();

        if (a) {
            this.think('I should go with uber, it is raining');
            this.goTo(workPlace, new Uber());
        } else {
            // HAAAAAAAAAAAAAAAACKK 2.0!
            this.think('Its not raining, I should have gone with uber.');
            this.goTo(workPlace, new Tram(5));
        }
    }

    sleep(numberOfHours: number): void {
        this.think('Hmmm sheepss, goats...');
        this.state = 'sleeping';
        this.energy = this.energy + numberOfHours * 10;
    }

    wakeUp(): boolean {
        this.think('Vilim ;)');

        const time = Life.getInstance().getTime();

        if (time < 10) {
            this.think('Back to sleep, more sheeps');
            this.sleep(2);
            return false;
        } else {
            this.think('Ohh shieets, again.');
            this.state = 'awake';
            return true;
        }
    }

    work(numberOfHours: number): void {
    }

    eat(): void {
        this.energy += 10;
    }
}