import { dictManagement } from './dictManage.js';
import { getFile } from "./utils.js";


const [
    btnDialog,
    btnClose,
    btnReset,
    btnSave,
    dialogForm,
    fileBtn,
    fileInput,
    dialogDict
] = [
    '[data-type="open-dialog"]',
    '[data-type="close"]',
    '[data-type="reset"]',
    '[data-type="save"]',
    '[data-type="form"]',
    '[data-type="file-btn"]',
    '[data-type="file-input"]',
    '#dictionary'
].map(selector => document.querySelector(selector))

const inputs = Array.from(dialogForm.querySelectorAll('input'))
    .reduce((acc, el) => {
        const idInput = el.id;
        acc[idInput] = el
        return acc
    }, {})

export function updateForm(obj = dictManagement.getCurrentDict()){
    const dictValues = Object.entries(obj)

    dictValues.forEach(item => {
        const [key, value] = item
        const input = inputs[key.toLowerCase()]
        if(!input) return;

        input.value = value;
    })

}

btnDialog.addEventListener('click', () => {
    updateForm()
    if(!dialogDict.open) dialogDict.showModal()
})

btnSave.addEventListener('click', () => {
    const formData = new FormData(dialogForm)
    const newDict = Object.fromEntries(formData);
    dictManagement.setCurrentDict(newDict)
    dialogDict.close()
})

btnReset.addEventListener('click', () => {
    dictManagement.deleteDictionary()
    dialogDict.close()
})

// Drag an drop Files

fileBtn.addEventListener('click', () => {
    fileInput.click()
})

dialogDict.addEventListener('drop', (ev) => {
    ev.stopPropagation()
    ev.preventDefault()

    const files = ev?.dataTransfer?.files

    if(!files) return;

    const [ file ] = files

    if(file.type !== 'application/json') return;
    getFile(file)
})

dialogDict.addEventListener('dragover', (ev) => {
    ev.preventDefault()
    console.log('Estan por aventar')
})


btnClose.addEventListener('click', () => dialogDict.close())