import "reflect-metadata";
import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";

@Component({
  templateUrl: "app/app.html",
  selector: "app",
  directives: [CORE_DIRECTIVES]
})
class App {
  constructor() {
    this.things = [{id: 1, name: "Thing one"}, {id: 2, name: "Thing two"}];
  }
}

bootstrap(App, []);
