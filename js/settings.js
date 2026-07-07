import { load, save } from "./storage.js";

const STORAGE_NAME = "settings";

const defaultSettings = {

    self:{

        name:"自分",

        icon:"😳",

        color:"#4F8EF7"

    },

    partner:{

        name:"相手",

        icon:"🐱",

        color:"#FF6B81"

    }

};

export const settings = load(

    STORAGE_NAME,

    structuredClone(defaultSettings)

);

export function saveSettings(){

    save(

        STORAGE_NAME,

        settings

    );

}

export function updateSettings(newSettings){

    Object.assign(

        settings.self,

        newSettings.self ?? {}

    );

    Object.assign(

        settings.partner,

        newSettings.partner ?? {}

    );

    saveSettings();

}
