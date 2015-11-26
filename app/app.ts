import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";
import ThingService from "./thing_service";
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  templateUrl: "app/app.html",
  selector: "app",
  directives: [CORE_DIRECTIVES]
})
class App {
  constructor(thingService: ThingService) {
    this.newThing = {name: ""};
    this.thingService = thingService;
    this.thingService.getThings().subscribe((res) => {
      console.log(res);
      this.things = res.data;
    });

  }
  addThing() {
    this.thingService.addThing(this.newThing).subscribe( (res) => {
      console.log(res);
      this.things.push(res.data);
      this.newThing = {};
    });
  }
}

bootstrap(App, [ThingService, HTTP_PROVIDERS]);
