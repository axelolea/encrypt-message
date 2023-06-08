// Default Values
export const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
})

export const maxLengthValues = 6

export const theme = {
    'DARK': 'dark',
    'LIGHT': 'light'
}

export const defaultTheme = theme.DARK

export const lang = {
    'ES': 'spanish',
    'EN': 'english'
}

export const defaultLang = lang.EN

export const localStorageKeys = {
    'keyLang': 'lang',
    'keyTheme': 'theme',
    'keyDict': 'dict'
}

export const keysDict = Object.keys(defaultDictionary)

export const boxAlert = '[data-type="box-alert"]'
export const alertDurationTime = 1400 //ms
export const alertDelayTime = 300 //ms
export const alertClasses = {
    'info': 'info-alert',
    'warning': 'warning-alert',
    'success': 'success-alert',
    'error': 'error-alert',
    'generic': 'alert',
    'hidden': 'hidden'
}