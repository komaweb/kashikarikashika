import {

    settings,

    updateSettings

} from "../settings.js";

export function initializeSettingsView(refresh){

    const elements = {

        selfName:
            document.getElementById("selfName"),

        selfIcon:
            document.getElementById("selfIcon"),

        partnerName:
            document.getElementById("partnerName"),

        partnerIcon:
            document.getElementById("partnerIcon"),

        saveButton:
            document.getElementById("saveSettingsButton")

    };

    loadSettings(elements);

    elements.saveButton.addEventListener(

        "click",

        ()=>{

            saveSettings(elements);

            refresh();

            alert("保存しました！");

        }

    );

}

function loadSettings(elements){

    elements.selfName.value =
        settings.self.name;

    elements.partnerName.value =
        settings.partner.name;

}

function saveSettings(elements){

    updateSettings({

        self:{

            name:
                elements.selfName.value.trim() || "自分"

        },

        partner:{

            name:
                elements.partnerName.value.trim() || "相手"

        }

    });

}
