import { form } from "./elements.js";
import { hidePreview } from "./previewController.js";

const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
};

const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
};

function modalController(obj) {
  const { modal, modalBtn, classOpen, classClose } = obj;
  modalBtn.addEventListener("click", () => {
    openModal(modal, classOpen);
  });
  modal.addEventListener("click", () => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains(classClose)
    ) {
      closeModal(modal, classOpen);
      hidePreview();
      form.reset();
    }
  });
}

export default modalController;
