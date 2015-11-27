import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Injectable} from "angular2";
import PhoenixChannels from "angular2-phoenix-channels";

@Injectable()
class ThingService {
  constructor(http: Http, phoenixChannels: PhoenixChannels) {
    this.http = http;
    this.phoenixChannels = phoenixChannels;
    let thingsChannel = this.phoenixChannels.channel("things:all");
    thingsChannel.join().subscribe( () => { console.log("joined!"); });
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
