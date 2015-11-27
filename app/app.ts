import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES, provide } from "angular2";
import ThingService from "./thing_service";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import PhoenixChannels from "angular2-phoenix-channels";

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

let phoenixChannelsProvider = provide(PhoenixChannels, { useFactory: () => {
  return new PhoenixChannels("ws://localhost:4000/socket");
} });

bootstrap(App, [ThingService, HTTP_PROVIDERS, phoenixChannelsProvider]);
