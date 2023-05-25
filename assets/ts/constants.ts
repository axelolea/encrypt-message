enum Lang {
    EN,
    ES
}

enum Theme {
    DARK,
    LIGHT
}

const defaultDictionary: Record<string, string> = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
})

const defaultLang = Lang.EN

const defaultTheme = Theme.DARK