// Get localstorage values


export const getLocalValue = (obj, key) => {
    const localValue = localStorage.getItem(key)
    const contents = Object.values(obj).includes(localValue)
    return contents ? localValue : null
}


export const getLocalObject = ( key ) => {
    const localValue = localStorage.getItem(key);
    if (localValue === null) return null;
    const localObj = JSON.parse(localValue);
    const isObj = localObj instanceof Object;
    return isObj ? localObj : null;
}


export const setLocalValue = (value, key) => {
    if(!(value instanceof String)) return;
    localStorage.setItem(key, value);
}


export const setLocalObject = (obj, key) => {
    if(!(obj instanceof Object)) return;
    const objString = JSON.stringify(obj);
    localStorage.setItem(key, objString);
}

export const deleteLocal = key => localStorage.removeItem(key)
