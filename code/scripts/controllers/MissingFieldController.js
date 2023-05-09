const { WebcController } = WebCardinal.controllers;

/*export default class MissingFieldController extends WebcController {

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
      const invalidDate = this.getState().invalidDate;
      if(invalidDate[0])
      {
        missingFieldMessage.innerHTML = `The following date is invalid:${invalidDate[0]}`;
      }
      if (missingFields.length > 0) {
        missingFieldMessage.innerHTML += `The following fields are missing: ${missingFields.join(", ")}`;
      }
      else {
        missingFieldMessage.innerHTML = "Unknown missing fields error";
      }
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
    const invalidDate = this.getState().invalidDate;
    const missingFieldMessage = document.getElementById("missing-field-message");
    
    let message = "";

    if (invalidDate && invalidDate.length > 0) {
      message += `The following date is invalid: ${invalidDate.join(", ")}. `;
    }
    
    if (missingFields && missingFields.length > 0) {
      message += `The following fields are missing: ${missingFields.join(", ")}`;
    }
    if (message === "") {
      missingFieldMessage.innerHTML = "Unknown missing fields error";
    } else {
      missingFieldMessage.innerHTML = message;
    }
  }
}