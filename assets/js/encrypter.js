export const encryptText = text => {
    let encryptText = ''

    for (const letter of text)
        encryptText = encryptText.concat(window.currentDict[letter] ?? letter);

    return encryptText
}


export const decryptText = text => {

    const findKeys = Object.keys(window.currentDictReverse).reverse()
    let decryptText = text

    for (const key of findKeys)
        decryptText = decryptText.replaceAll(key, window.currentDictReverse[key])

    return decryptText
}
