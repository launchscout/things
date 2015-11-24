import "reflect-metadata";
import { bootstrap, Component } from "angular2";

@Component({
  template: "Hi there it worked!!!",
  selector: "app"
})
class App {

}

bootstrap(App, []);
