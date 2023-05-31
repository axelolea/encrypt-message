// Default Values
import { getLocalValue } from './localValues.js';

export const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
})

const theme = {
    'dark': 'dark',
    'light': 'light'
}

const defaultTheme = theme.dark

const lang = {
    'ES': 'spanish',
    'EN': 'english'
}

const defaultLang = lang.EN

export const localStorageKeys = {
    'keyLang': 'lang',
    'keyTheme': 'theme',
    'keyDict': 'dict'
}

// Set current values

export const currentLang = getLocalValue(lang, localStorageKeys.keyLang) ?? defaultLang;
export const currentTheme = getLocalValue(theme, localStorageKeys.keyTheme) ?? defaultTheme;
