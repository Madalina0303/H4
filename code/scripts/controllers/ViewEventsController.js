const { WebcController } = WebCardinal.controllers;
import {getEventManagerServiceInstance} from "../../scripts/controllers/services/EventManagerService.js";

export default class ViewEventsController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={}
       this.addCategoryListener();

   }

   addCategoryListener() {
    this.onTagClick('add-new-event', () => {
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const category = document.getElementById('category').value;
        const details = document.getElementById('details').value;
        this.navigateToPageTag('viewEvents');



        getEventManagerServiceInstance((err, instance) => {
            if (err) {
                // display modal with error message for the user (e.g. try again)
            }
            instance.addEvent(date, time, category, details, (err) => {
                if (err) {
                    // display modal with error message for the user (e.g. try again)
                }
            this.navigateToPageTag('viewEvents');
            })
        });
    });
}

}