import * as angular from "angular";
import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES, provide, UpgradeAdapter } from "angular2";
import ThingService from "./thing_service";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import PhoenixChannels from "angular2-phoenix-channels";


var ng1module = angular.module("ng1Module", []);
var upgradeAdapter = new UpgradeAdapter();

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
      this.newThing = {};
    });
  }
}

let phoenixChannelsProvider = provide(PhoenixChannels, { useFactory: () => {
  return new PhoenixChannels("ws://localhost:4000/socket");
} });

upgradeAdapter.addProvider(ThingService);
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(phoenixChannelsProvider);
ng1module.directive('app', upgradeAdapter.downgradeNg2Component(App));
// bootstrap(App, [ThingService, HTTP_PROVIDERS, phoenixChannelsProvider]);

export function main() {
  upgradeAdapter.bootstrap(document.body, ['ng1Module']);
}
