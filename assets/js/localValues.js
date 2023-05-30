// Get localstorage values


export const getLocalValue = obj => {
    const localValue = localStorage.getItem(obj.keyLocal)
    if(Object.values(obj).includes(localValue)) return null
    return localValue
}


export const getLocalObject = () => {
    const localValue = localStorage.getItem('dict');
    if (localValue === null) return null;
    const localObj = JSON.parse(localValue);
    if (localObj instanceof Object) return localObj;
    return null;
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
