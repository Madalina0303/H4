import AddEventController from "../controllers/AddEventController"
const { Controller } = WebCardinal.controllers;


export default class ExampleController extends  Controller {
    constructor(element) {
        const {ui} = this;
        super(element);

        this.model = {
            name: "WebCardinal",
        }
        ui.page = new AddEventContoller(element);
        this.onTagClick('send-event-data', async (model, button) => {
            console.log("ADAF");
            let inputElement = document.querySelector("#date");

            const newMemberDid = inputElement.value;
            try {
                if (!newMemberDid) {
                    throw new Error("DID is empty.");
                }
            }
            catch (e) {
                ui.showToast("Could not add user to the group because: " + e.message, {type: 'danger'});
            }
            this.load = true;
            ui.page.loadEventPage(this.model.name);
        }
        )

        }
    loadEventPage(state) {
            const src = new URL(`/pages/viewEvents.html`, window.location).pathname;
        
            const newElement = document.createElement("webc-app-loader");
        
            newElement.src = `.${src}`;
            newElement.basePath = WebCardinal.basePath;
        
            const {loader: oldElement} = WebCardinal.state.page;
        
            WebCardinal.state.loaders = {
              newElement,
              oldElement,
            };
        
            oldElement.parentElement.insertBefore(newElement, oldElement);
            oldElement.hidden = true;
        
            window.history.pushState(JSON.stringify(state), null, window.location.href);
          }

    
    viewModel = {
        name: {
            label: "Title",
            name: "name",
            required: true,
            placeholder: "Name of your post here...",
            value: ''
        },
        description: {
            label: "Content",
            name: "description",
            required: true,
            placeholder: "What is in your mind ?",
            value: '',
            height: "100"
        }
    };
}
