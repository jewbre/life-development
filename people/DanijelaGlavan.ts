import { Life } from "../base/Life";
import { Person } from "../base/Person";
import { Place } from "../base/Place";
import { TransportationMethod } from "../base/TransportationMethod";
import { DM } from "../places/DM";
import { Tram } from "../transportationMethod/Tram";
import { Uber } from "../transportationMethod/Uber";
import { Walk } from "../transportationMethod/Walk";

export class DanijelaGlavan extends Person {

    constructor() {
        super();
        this.name = "Danijela Glavan";
        this.age = 20;
        this.hairColor = "Brown";
        this.hobies = [
            'spavanje',
            'serije',
            'sminkanje',
            'yoga',
        ];
        this.energy = 100;
        this.state = 'awake';
    }

    goTo(place: Place, transportationMethod: TransportationMethod): void {
    }

    goToWork(): void {
        this.think('OMG, agaiiiiin?');
        const time = Life.getInstance().getTime();
        const isItRaining = Life.getInstance().isItRaining();
        const temperature = Life.getInstance().getTemperature();
        const timeLeftToGetToJob = 16 - time;

        this.think(`Ok it is ${time} o clock.`);
        this.think(`It is ${isItRaining ? '' : 'not'} raining.`);
        this.think(`Temperature is ${temperature}.`);

        this.think('Hmm, am I late?');
        if (timeLeftToGetToJob < 0.5) {
            this.think('Oh shit, yess');
            this.think('Im gonna call me an uber');
            this.goTo(new DM(), new Uber());
        } else if (isItRaining) {
            this.think('OMG its raining hell');
            if (temperature > 25) {
                this.think('but great it is warm');
                this.think('Ill walk');
                this.goTo(new DM(), new Walk());
            } else {
                this.think('BRRR tram it is');
                this.goTo(new DM(), new Tram(11));
            }
        } else {
            this.think('Bla bla');
            this.goTo(new DM(), new Tram(11));
        }
    }

    getReady(): void {
        // eat breakfast
        // gets dressed up
        // and all other stuff

        this.energy = this.energy - 1;
    }

    write(): void {
    }

    sleep(numberOfHours: number): void {
        this.state = 'sleeping';

        if (numberOfHours == 7) {
            this.energy = 70;
        } else if (numberOfHours < 7) {
            this.energy = numberOfHours * 10;
        } else if (numberOfHours > 7) {
            this.energy = 70 - (numberOfHours - 7) * 5;
        }
    }

    wakeUp(): boolean {
        // open your eyes
        // checks phone for time and messages

        const time = Life.getInstance().getTime();
        this.think('Oh what time it is?');
        this.think(time + '');

        if (time < 9) {
            this.think('A little more beauty sleep.');
            this.sleep(1);
            return false;
        }

        this.state = 'awake';
        this.think('Better get up');
        return true;
    }

    walk(): void {
        this.energy = this.energy - 10;
    }

    smile(): void {
        this.energy = this.energy + 5;
    }

    turnSad(): void {
        this.energy = this.energy - 5;
    }

    climb(place: Place): void {
        this.energy = this.energy - 50;
    }
}