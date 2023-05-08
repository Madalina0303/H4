const { WebcController } = WebCardinal.controllers;
/*export default class MissingFieldController extends WebcController {

    constructor(...props) {
        super(...props);

        const message = this.model.missingFields.map((field) => `${field} is missing.`).join(' ');
        this.getElementById('missing-field-message').textContent = message;
        this.onTagClick('go-back-button', () => {
            this.goBack();
        });
    }

    goBack() {
        window.history.back();
    }
}*/
export default class MissingFieldController extends WebcController {

    constructor(...props) {
      super(...props);
  
      this.model = {
        missingFields: [],
      };
  
      this.onTagClick("go-back-button", () => {
        window.history.back();
      });
  
      this.displayMissingFields();
    }
  
    displayMissingFields() {
      const missingFields = this.getState().missingFields;
      const missingFieldMessage = document.getElementById("missing-field-message");
      if (missingFields.length > 0) {
        missingFieldMessage.innerHTML = `The following fields are missing: ${missingFields.join(", ")}`;
      } else {
        missingFieldMessage.innerHTML = "Unknown missing fields error";
      }
    }
  }