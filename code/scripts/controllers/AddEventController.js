const { WebcController } = WebCardinal.controllers;
import {getEventManagerServiceInstance} from "../../scripts/controllers/services/EventManagerService.js";
import EventsService from './services/EventService.js'
import { EventDataSource } from "../../scripts/controllers/datasource/EventDataSource.js";

export default class ViewEventsController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={}
       this.addCategoryListener();
       this.eventDataSource = new EventDataSource();

   }

   addCategoryListener() {
    this.onTagClick('add-new-event', () => {
        const currentDate = new Date();
        const date = document.getElementById('date').value;
        const date_compare = new Date(date);
        const time = document.getElementById('time').value;
        const category = document.getElementById('category').value;
        const details = document.getElementById('details').value;
        const missingFields = [];
        const invalidDate = [];
       
        if (!date) {
            missingFields.push('Date');
        } else if (date_compare < currentDate) {
            invalidDate.push(date);
        }
    
        if (!time) {
            missingFields.push('Time');
        }
    
        if (!category) {
            missingFields.push('Category');
        }
    
        if (!details) {
            missingFields.push('Details');
        }
    
        if (missingFields.length > 0 || invalidDate.length > 0) {
            const state = {};
            if (missingFields.length > 0) {
            state.missingFields = missingFields;
            }
            if (invalidDate.length > 0) {
            state.invalidDate = invalidDate;
            }
            this.navigateToPageTag('missing-field', state);
            return;
        }
       
        this.eventDataSource.addEvent(date, time, category, details);

        localStorage["date"] = date;
        localStorage["time"] = time;
        localStorage["category"] = category;
        localStorage["details"] = details;
        this.navigateToPageTag('viewEvents');

    });
}

}