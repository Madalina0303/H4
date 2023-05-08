
import {getEventManagerServiceInstance} from "../../scripts/controllers/services/EventManagerService.js";

const {WebcController} = WebCardinal.controllers;

export default class LoginController extends WebcController {
    constructor(element, history) {
        super(element, history);

        this.model = {};
        this.login();
    }

    login() {
        this.onTagClick("login-submit", () => {
            const login= {
                username: document.getElementById("name").value,
                email: document.getElementById("email-address").value,
                password: document.getElementById("password").value,
            };
            if (!login.username || !login.email || !login.password) {
                console.warn("Please fill out all the fields before login!")
            } else {
                    getEventManagerServiceInstance((err, instance) => {
                        if (err) {
                            // display modal with error message for the user (e.g. try again)
                        }
                        instance.login(register.username, register.email, register.password, (err) => {
                            if (err) {
                                this.navigateToPageTag('home');
                            }
                            this.navigateToPageTag('viewEvents');
                        });
                    });
            }
        })
    }

}