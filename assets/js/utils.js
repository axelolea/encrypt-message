import { updateForm } from "./dialog.js";


export const getFile = file => {
    const reader = new FileReader()

    reader.addEventListener('load', () => {

        if(typeof reader.result !== 'string') return;

        const jsonFile = JSON.parse(reader.result);

        if(typeof jsonFile !== 'object' || Array.isArray(jsonFile)) return;

        updateForm(jsonFile)
    }, false)

    if (file) reader.readAsText(file)
}