import { Life } from "./base/Life";
import { DanijelaGlavan } from "./people/DanijelaGlavan";

const life = Life.getInstance();

// something is happening

const danchy = new DanijelaGlavan();
life.addPerson(danchy);

// danchy one day
if (danchy.wakeUp()) {
    danchy.getReady();
    danchy.goToWork();
} else {
    danchy.think('I should get some more sleep');
    danchy.sleep(2);
}

// after some long period of time
life.killPerson(danchy);
