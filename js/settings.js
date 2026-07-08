import { load, save } from "./storage.js";

const STORAGE_NAME = "settings";

const defaultSettings = {

    self:{

        name:"自分",

        image:null,

        color:"#4F8EF7"

    },

    partner:{

        name:"相手",

        image:null,

        color:"#FF6B81"

    }

};

export const settings = load(

    STORAGE_NAME,

    structuredClone(defaultSettings)

);

// 古いデータとの互換性
settings.self.image ??= null;
settings.partner.image ??= null;

settings.self.color ??= "#4F8EF7";
settings.partner.color ??= "#FF6B81";

applyThemeColors();

export function saveSettings(){

    save(

        STORAGE_NAME,

        settings

    );

    applyThemeColors();

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

function applyThemeColors(){

    document.documentElement.style.setProperty(

        "--self-color",

        settings.self.color

    );

    document.documentElement.style.setProperty(

        "--partner-color",

        settings.partner.color

    );

}
