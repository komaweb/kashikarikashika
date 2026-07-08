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

        selfDeleteButton:
            document.getElementById("selfIconDeleteButton"),

        partnerName:
            document.getElementById("partnerName"),

        partnerIcon:
            document.getElementById("partnerIcon"),

        partnerPreview:
            document.getElementById("partnerIconPreview"),

        partnerButton:
            document.getElementById("partnerIconButton"),

        partnerDeleteButton:
            document.getElementById("partnerIconDeleteButton"),

        saveButton:
            document.getElementById("saveSettingsButton")

    };

    loadSettings(elements);

    bindImagePicker(

        elements.selfButton,

        elements.selfIcon,

        elements.selfPreview,

        elements.selfDeleteButton,

        "self"

    );

    bindImagePicker(

        elements.partnerButton,

        elements.partnerIcon,

        elements.partnerPreview,

        elements.partnerDeleteButton,

        "partner"

    );

    elements.saveButton.addEventListener(

        "click",

        ()=>{

            saveNames(elements);

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

    }else{

        elements.selfPreview.removeAttribute("src");

    }

    if(settings.partner.image){

        elements.partnerPreview.src =
            settings.partner.image;

    }else{

        elements.partnerPreview.removeAttribute("src");

    }

    updateDeleteButton(

        elements.selfPreview,

        elements.selfDeleteButton

    );

    updateDeleteButton(

        elements.partnerPreview,

        elements.partnerDeleteButton

    );

}

function bindImagePicker(

    button,

    input,

    preview,

    deleteButton,

    target

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

            updateDeleteButton(

                preview,

                deleteButton

            );

            updateSettings({

                [target]:{

                    image:image

                }

            });

        }

    );

    deleteButton.addEventListener(

        "click",

        ()=>{

            preview.removeAttribute("src");

            input.value="";

            updateDeleteButton(

                preview,

                deleteButton

            );

            updateSettings({

                [target]:{

                    image:null

                }

            });

        }

    );

}

function updateDeleteButton(

    preview,

    button

){

    if(preview.hasAttribute("src")){

        button.style.display="block";

    }else{

        button.style.display="none";

    }

}

function saveNames(elements){

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
