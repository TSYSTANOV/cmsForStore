import { form, preview } from "./elements.js";
import { toBase64 } from "./utils.js";

function showPreview (src){
    preview.style.display = 'block'
    preview.src = src
}
function hidePreview (){
    preview.style.display = ''
    preview.src = ''
}

function previewController (){
    const imageFile = form.image
    
    imageFile.addEventListener('change',  async()=>{
        if(imageFile.files.length){
            const src = await toBase64(imageFile.files[0])
            showPreview(src)
        }
    })
}

export {previewController, showPreview, hidePreview }