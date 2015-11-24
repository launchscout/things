import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";
import ThingService from "./thing_service";

@Component({
  templateUrl: "app/app.html",
  selector: "app",
  directives: [CORE_DIRECTIVES]
})
class App {
  constructor(thingService: ThingService) {
    this.newThing = {name: ""};
    this.things = thingService.things;
    this.thingService = thingService;
  }
  addThing() {
    this.thingService.addThing(this.newThing);
    this.newThing = {};
  }
}

bootstrap(App, [ThingService]);
