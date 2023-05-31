import { defaultDictionary, localStorageKeys } from './constants.js';
import { getLocalObject, setLocalObject, deleteLocal } from './localValues.js';



class DictionaryManagement {

    #currentReverseDict;
    #currentDict;

    constructor() {
        this.#currentDict = getLocalObject(localStorageKeys.keyDict) ?? defaultDictionary;
        this.#currentReverseDict = DictionaryManagement.reverseDict(this.#currentDict)
    }

    static reverseDict(dict){
        return Object.keys(dict).reduce((newObj, key) => {
            const value = dict[key];
            newObj[value] = key;
            return newObj;
        },{});
    }

    // getters

    getCurrentDict(){
        return this.#currentDict;
    }

    getCurrentReverseDict(){
        return this.#currentReverseDict
    }

    setCurrentDict(obj = defaultDictionary){
        //Validate dict
        if(!this.#verifyDictionary(obj)) return;

        // Set Dictionary
        setLocalObject(obj, localStorageKeys.keyDict);
        this.#currentDict = obj;
        this.#currentReverseDict = DictionaryManagement.reverseDict(obj)
    }

    #verifyDictionary(obj){
        if(!(obj instanceof Object)) return false

        const keys = Object.keys(obj)
        const values = Object.values(obj)

        if(keys.length === 0 || keys.length !== values.length) return false

        const isValidKey = key => typeof key === "string" && key.length === 1
        const isValidValue = value => typeof value === "string" && value.length <= 6

        return  keys.every(isValidKey) && values.every(isValidValue)
    }

    deleteDictionary(){
        deleteLocal(localStorageKeys.keyDict)
        this.setCurrentDict()
    }

}

export const dictManagement = new DictionaryManagement()