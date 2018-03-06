import { Life } from "./base/Life";
import { IvanAnic } from "./people/IvanAnic";

const life = Life.getInstance();

// trigger life events

/// puuuno toga

const pero = new IvanAnic();
life.addPerson(pero);

// zvii

pero.sleep(8);

if (pero.wakeUp()) {
    pero.goToWork();
} else {
    // zzzz
}

//.....

// auto skupi peru
life.killPerson(pero);

// svi bi tuzni i placu