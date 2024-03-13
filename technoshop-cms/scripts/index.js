import { modalBtn, modal } from "./elements.js";
import { formController } from "./formController.js";
import modalController from "./modalController.js";
import { previewController } from "./previewController.js";
import { tableController } from "./tableController.js";

function initApp() {
  modalController({
    modal,
    modalBtn,
    classOpen: "d-block",
    classClose: "btn-close",
  });
  previewController();
  tableController();
  formController();
}
initApp();
