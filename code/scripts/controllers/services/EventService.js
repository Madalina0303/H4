class EventsService {
    events = [];

    constructor() {  }

    
    add(eventData) {

        console.log("am intrat in add");
        const eventDate = { date: eventData.date};
        const eventTime = { time: eventData.time};
        const eventCategory = { category: eventData.category};
        const eventDetails = { details: eventData.detailes};
        
        console.log("am ajuns aci");
        this.events.push({ eventDate, eventTime, eventCategory, eventDetails });

        console.log(this.events);
    }

    getAll() {
        return this.events.map(x => x);
    }
}

export default new EventsService();