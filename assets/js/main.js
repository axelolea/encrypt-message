import { decryptText, encryptText } from './encrypter.js';


const [
    textInput,
    textOutput,
    btnEncrypt,
    btnDecrypt,
    btnCopy
] = [
    '[data-type="text-input"]',
    '[data-type="text-output"]',
    '[data-type="encrypt"]',
    '[data-type="decrypt"]',
    '[data-type="copy"]'
].map( selector => document.querySelector(selector))


btnCopy.addEventListener('click', async () => {
    await navigator.clipboard.writeText(textOutput.value)
})

btnEncrypt.addEventListener('click', () => {
    textOutput.value = encryptText(textInput.value)
})

btnDecrypt.addEventListener('click', () => {
    textOutput.value = decryptText(textInput.value)
})
