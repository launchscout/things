import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";

@Component({
  templateUrl: "app/app.html",
  selector: "app",
  directives: [CORE_DIRECTIVES]
})
class App {
  constructor() {
    this.things = [{id: 1, name: "Thing one"}, {id: 2, name: "Thing two"}];
    this.newThing = {name: ""};
  }
  addThing() {
    this.things.push(this.newThing);
    this.newThing = {};
  }
}

bootstrap(App, []);
