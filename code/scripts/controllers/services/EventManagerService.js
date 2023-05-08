class EventManagerService {

    constructor(mainEnclave) {
        this.enclave = mainEnclave;
    }

    listEvents(callback) {
        this.enclave.getAllRecords("events", callback);
    }

    addEvent(date, time, category, details, callback) {
        this.enclave.insertRecord("event", date, time, category, details, callback);
    }
    login(username, email, password, callback){
        this.enclave.filter("users", [`username == ${username}`, `email == ${email}`, `password == ${password}`], callback);
    }
    addUser(username, email, password,callback){
        this.enclave.insertRecord("user",username, email, password, callback);
    }
}

let eventManagerService;
let getEventManagerServiceInstance = function (callback) {
    if (!eventManagerService) {
        const opendsu = require("opendsu");
        let securityContext = opendsu.loadAPI("sc");
        return securityContext.getMainEnclave((err, mainEnclave) => {
            if (err) {
                return callback(err);
            }
            eventManagerService = new EventManagerService(mainEnclave);
            return callback(undefined, eventManagerService);
        });
    }
    callback(undefined, eventManagerService);
}

export {
    getEventManagerServiceInstance
};