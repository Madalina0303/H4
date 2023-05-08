
import {getEventManagerServiceInstance} from "../../scripts/controllers/services/EventManagerService.js";

const {WebcController} = WebCardinal.controllers;

export default class RegisterController extends WebcController {
    constructor(element, history) {
        super(element, history);

        this.model = {};
        this.register();
    }

    register() {
        this.onTagClick("register-submit", () => {
            const register= {
                username: document.getElementById("name").value,
                email: document.getElementById("email-address").value,
                password: document.getElementById("password").value,
                confirmPassword: document.getElementById("confirm-password").value
            };
            if (!register.username || !register.email || !register.password || !register.confirmPassword) {
                console.warn("Please fill out all the fields before saving a password!")
                // display modal with error message for the user
            } else {
                if (register.password !== register.confirmPassword) {
                    console.warn("Inserted passwords are different!");
                    // display modal with error message for the user
                } else {
                    getEventManagerServiceInstance((err, instance) => {
                        if (err) {
                            // display modal with error message for the user (e.g. try again)
                        }
                        instance.addUser(register.username, register.email, register.password, (err) => {
                            if (err) {
                                // display modal with error message for the user (e.g. try again)
                            }
                            this.navigateToPageTag('viewEvents');
                        });
                    });
                }
            }
            // this.model.dataSource = new CategoriesDataSource();
            // this.model.dataSource.addPasswordToCategory(newPassword);
        })
    }

}