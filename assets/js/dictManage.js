import { defaultDictionary } from './constants.js';
import { getLocalObject, setLocalObject } from './localValues.js';



class DictionaryManagement {

    #currentReverseDict;
    #currentDict;

    constructor() {
        this.#currentDict = getLocalObject() ?? defaultDictionary;
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

        if(!this.verifyDictionary(obj)) return;

        // Set Dictionary
        setLocalObject(obj);
        this.#currentDict = obj;
        this.#currentReverseDict = DictionaryManagement.reverseDict(obj)
    }

    verifyDictionary(obj){

        if(!(obj instanceof Object)) return false

        const keys = Object.keys(obj)

        if(keys.every(key => key instanceof String && key.length === 1)) return false

        console.log('hola')

        return true
    }

}

export const dictManagement = new DictionaryManagement()