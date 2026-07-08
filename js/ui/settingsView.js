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

        selfPreview:
            document.getElementById("selfIconPreview"),

        selfButton:
            document.getElementById("selfIconButton"),

        partnerName:
            document.getElementById("partnerName"),

        partnerIcon:
            document.getElementById("partnerIcon"),

        partnerPreview:
            document.getElementById("partnerIconPreview"),

        partnerButton:
            document.getElementById("partnerIconButton"),

        saveButton:
            document.getElementById("saveSettingsButton")

    };

    loadSettings(elements);

    bindImagePicker(

        elements.selfButton,

        elements.selfIcon,

        elements.selfPreview

    );

    bindImagePicker(

        elements.partnerButton,

        elements.partnerIcon,

        elements.partnerPreview

    );

    elements.saveButton.addEventListener(

        "click",

        async()=>{

            await saveSettings(elements);

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

    if(settings.self.image){

        elements.selfPreview.src =
            settings.self.image;

    }

    if(settings.partner.image){

        elements.partnerPreview.src =
            settings.partner.image;

    }

}

function bindImagePicker(

    button,

    input,

    preview

){

    button.addEventListener(

        "click",

        ()=>{

            input.click();

        }

    );

    input.addEventListener(

        "change",

        async()=>{

            const file=input.files?.[0];

            if(!file){

                return;

            }

            const image=

                await resizeImage(file);

            preview.src=image;

        }

    );

}

async function saveSettings(elements){

    updateSettings({

        self:{

            name:
                elements.selfName.value.trim() || "自分",

            image:
                elements.selfPreview.src || null

        },

        partner:{

            name:
                elements.partnerName.value.trim() || "相手",

            image:
                elements.partnerPreview.src || null

        }

    });

}

function resizeImage(file){

    return new Promise((resolve)=>{

        const reader=new FileReader();

        reader.onload=()=>{

            const image=new Image();

            image.onload=()=>{

                const canvas=

                    document.createElement(

                        "canvas"

                    );

                const size=300;

                canvas.width=size;

                canvas.height=size;

                const context=

                    canvas.getContext("2d");

                const scale=Math.max(

                    size/image.width,

                    size/image.height

                );

                const width=

                    image.width*scale;

                const height=

                    image.height*scale;

                const x=

                    (size-width)/2;

                const y=

                    (size-height)/2;

                context.drawImage(

                    image,

                    x,

                    y,

                    width,

                    height

                );

                resolve(

                    canvas.toDataURL(

                        "image/jpeg",

                        0.75

                    )

                );

            };

            image.src=reader.result;

        };

        reader.readAsDataURL(file);

    });

}
