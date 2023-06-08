import { boxAlert, alertDurationTime, alertDelayTime, alertClasses } from "./constants.js";

class AlertManage{

    #box;

    constructor(box) {
        this.#box = box
    }

    #insertAlert(text, typeAlert){
        const alertDiv = document.createElement('div')
        const btn = document.createElement('button')

        alertDiv.innerText = text
        btn.innerText = 'X'

        const removeFunc = () => alertDiv.remove()

        btn.onclick = removeFunc
        alertDiv.appendChild(btn)

        this.#box.appendChild(alertDiv)

        alertDiv.classList.add('alert', typeAlert)

        // Add hidden after duration time
        setTimeout(() => {
            alertDiv.classList.add(alertClasses.hidden)
        }, alertDurationTime)

        // Delete element after duration and delay time
        setTimeout(
            () => removeFunc(),
            alertDurationTime + alertDelayTime
        )

    }

    infoAlert(text){
        this.#insertAlert(text, alertClasses.info)
    }

    warningAlert(text){
        this.#insertAlert(text, alertClasses.warning)
    }

    successAlert(text){
        this.#insertAlert(text, alertClasses.success)
    }

    errorAlert(text){
        this.#insertAlert(text, alertClasses.error)
    }
}

const box = document.querySelector(boxAlert)

export const alertManagement = new AlertManage(box)