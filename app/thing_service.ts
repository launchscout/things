class ThingService {
  constructor() {
    this.things = [{id: 1, name: "Thing one"}, {id: 2, name: "Thing two"}];
  }

  addThing(thing) {
    this.things.push(thing);
  }
}

export default ThingService;
