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
].map( attr => document.querySelector(attr)) as [
    HTMLTextAreaElement,
    HTMLTextAreaElement,
    HTMLButtonElement,
    HTMLButtonElement,
    HTMLButtonElement
]


btnCopy.addEventListener('click', async () => {
    await navigator.clipboard.writeText(textOutput.value)
})