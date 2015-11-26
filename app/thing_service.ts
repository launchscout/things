import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from "angular2";

@Injectable()
class ThingService {
  constructor(http: Http) {
    this.http = http;
  }

  getThings() {
    return this.http.get('http://localhost:4000/api/things').map(res => res.json())
  }

  addThing(thing) {
    this.things.push(thing);
  }
}

export default ThingService;
