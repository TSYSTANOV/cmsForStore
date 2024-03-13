import {modalBtn, modal} from './elements.js'
import modalController from './modalController.js'
import {previewController} from './previewController.js'

function initApp(){
    modalController({modal, modalBtn, classOpen:"d-block", classClose:"btn-close"})
    previewController()
}
initApp()


