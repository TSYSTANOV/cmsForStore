import { form, modalSubmitBtn, modalTitle } from "./elements.js";
import { fillingForm } from "./formController.js";
import { hidePreview } from "./previewController.js";

const openModal = (modal, classOpen, id) => {
    if(id){
        fillingForm(id)
    }
   
    modal.classList.add(classOpen);
    
};

const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
};

function modalController(obj) {
  const { modal, modalBtn, classOpen, classClose, delegation} = obj;
  if(modalBtn){
  modalBtn.addEventListener("click", () => {
    openModal(modal, classOpen);
    modalTitle.textContent = 'Добавить новый товар' 
    modalSubmitBtn.textContent = 'Добавить товар'
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
if(delegation){
    delegation.parent.addEventListener('click',({target})=>{
        const goodsRow = target.closest(delegation.target)
        const tableExclude = target.closest(delegation.targetExclude)
       
        if(goodsRow && !tableExclude){
            openModal(modal, classOpen, goodsRow.dataset.id)
            modalTitle.textContent = `Изменить товар ${goodsRow.dataset.id}` 
            modalSubmitBtn.textContent = 'Изменить товар'
        }
    })
}
}

export default modalController;
