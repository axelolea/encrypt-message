import { dictManagement } from "./dictManage.js";
import { updateForm } from "./dialog.js";


const verifyDictionary = (obj) => {

}


export const getFile = (file) => {
    const reader = new FileReader()
    let result;
    reader.addEventListener('load', () => {

        const result = reader.result;
        if(typeof result !== 'string') return;

        const jsonFile = JSON.parse(result);
        if(typeof jsonFile !== 'object' || Array.isArray(jsonFile)) return;

        updateForm(jsonFile)
    }, false)

    if (file) reader.readAsText(file)
}