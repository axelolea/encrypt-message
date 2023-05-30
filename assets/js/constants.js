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



// Set current values

export const currentLang = getLocalValue(lang) ?? defaultLang;
export const currentTheme = getLocalValue(theme) ?? defaultTheme;
