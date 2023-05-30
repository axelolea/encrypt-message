import { dictManagement } from './dictManage.js';


const [
    btnDialog,
    btnClose,
    btnReset,
    btnSave,
    dialogForm,
    dialogDict
] = [
    '[data-type="open-dialog"]',
    '[data-type="close"]',
    '[data-type="reset"]',
    '[data-type="save"]',
    '[data-type="form"]',
    '#dictionary'
].map(selector => document.querySelector(selector))

const getInputFragment = () => {

    const inputFragment = document.createDocumentFragment()
    const dictValues = Object.entries(dictManagement.getCurrentDict())

    dictValues.forEach( item => {

        const [key, value] = item;
        const label = document.createElement('label')
        label.innerText = key

        const input = document.createElement('input');
        input.value = value;
        input.name = key;

        const container = document.createElement('div');
        [label, input].forEach(el => container.appendChild(el));

        inputFragment.appendChild(container)
    })

    return inputFragment
}


btnDialog.addEventListener('click', () => {
    dialogForm.innerHTML = ''
    dialogForm.appendChild(getInputFragment())
    dialogDict.showModal()
})

btnSave.addEventListener('click', () => {
    const formData = new FormData(dialogForm)
    const newDict = Object.fromEntries(formData);
    dictManagement.setCurrentDict(newDict)
    dialogDict.close()
})

btnReset.addEventListener('click', () => {
    dictManagement.setCurrentDict()
    dialogDict.close()
})

// Drag an drop Files

dialogDict.addEventListener('drop', (ev) => {
    ev.preventDefault()
    const files = ev.dataTransfer.files
    if(!files) return;

    const firstsFile = files[0]

    console.log(firstsFile)

    if(firstsFile.type !== 'application/json') return;

    const reader = new FileReader()
    reader.onloadend = () => {
        const data = JSON.parse(this.result)
        console.log(data)
    }
    reader.readAsText(firstsFile)
})

dialogDict.addEventListener('dragover', (ev) => {
    ev.preventDefault()
    console.log('Estan por aventar')
})


btnClose.addEventListener('click', () => dialogDict.close())