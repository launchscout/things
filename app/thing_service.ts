import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/api/things',
      JSON.stringify({thing: thing}),
      {headers: headers}
    ).map(res => res.json());
  }
}

export default ThingService;
