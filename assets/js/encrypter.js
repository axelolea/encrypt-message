import { dictManagement } from './dictManage.js';


export const encryptText = text => {
    let encryptText = ''

    const currentDict = dictManagement.getCurrentDict()

    for (const letter of text)
        encryptText = encryptText.concat(currentDict[letter] ?? letter);

    return encryptText
}


export const decryptText = text => {

    const currentDictReverse = dictManagement.getCurrentReverseDict()
    const findKeys = Object.keys(currentDictReverse)
    let decryptText = text

    for (const key of findKeys)
        decryptText = decryptText.replaceAll(key, currentDictReverse[key])

    return decryptText
}
