// Default Values
const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
})

const theme = {
    'dark': 'dark',
    'light': 'light',
    'keyLocal': 'theme'
}

const defaultTheme = theme.dark

const lang = {
    'ES': 'spanish',
    'EN': 'english',
    'keyLocal': 'lang'
}

const defaultLang = lang.EN

// Get localstorage values

const getLocalValue = (obj) => {
    const localValue = localStorage.getItem(obj.keyLocal)
    if(Object.values(obj).includes(localValue)) return null
    return localValue
}

const getLocalObject = () => {
    const localValue = localStorage.getItem('dict')
    if (localValue) return null
    const localObj = JSON.parse(localValue)
    if (!localObj instanceof Object) return null
    return localObj
}

const reverseDict = dict => {
    return Object.keys(dict).reduce((newObj, key) => {
        const value = dict[key]
        newObj[value] = key
        return newObj
    },{})
}

// Set current values

window.currentLang = getLocalValue(lang) ?? defaultLang;
window.currentTheme = getLocalValue(theme) ?? defaultTheme;
window.currentDict = getLocalObject() ?? defaultDictionary;
window.currentDictReverse = reverseDict(window.currentDict)
