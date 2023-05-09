const { WebcController } = WebCardinal.controllers;

import { EventDataSource } from "../../scripts/controllers/datasource/EventDataSource.js";

export default class ViewEventController extends WebcController {

   constructor(...props) {

       super(...props);

       this.model={

           eventDataSource:new EventDataSource(),

       };
       this.addCategoryListener();

   }
   addCategoryListener() {
    
    this.onTagClick('add-event', () => {
        this.navigateToPageTag('addEvent');
    });
   }
}