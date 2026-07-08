import {

    settings,

    updateSettings

} from "../settings.js";

const COLORS=[

    "#ef4444",

    "#f97316",

    "#eab308",

    "#22c55e",

    "#06b6d4",

    "#3b82f6",

    "#8b5cf6",

    "#ec4899"

];

export function initializeSettingsView(refresh){

    const elements={

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

        selfPalette:
            document.getElementById("selfColorPalette"),

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

        partnerPalette:
            document.getElementById("partnerColorPalette")

    };

    loadSettings(elements);

    bindName(

        elements.selfName,

        "self",

        refresh

    );

    bindName(

        elements.partnerName,

        "partner",

        refresh

    );

    bindImagePicker(

        elements.selfButton,

        elements.selfIcon,

        elements.selfPreview,

        elements.selfDeleteButton,

        "self",

        refresh

    );

    bindImagePicker(

        elements.partnerButton,

        elements.partnerIcon,

        elements.partnerPreview,

        elements.partnerDeleteButton,

        "partner",

        refresh

    );

    createColorPalette(

        elements.selfPalette,

        "self",

        refresh

    );

    createColorPalette(

        elements.partnerPalette,

        "partner",

        refresh

    );

}

function loadSettings(elements){

    elements.selfName.value=settings.self.name;

    elements.partnerName.value=settings.partner.name;

    if(settings.self.image){

        elements.selfPreview.src=settings.self.image;

    }

    if(settings.partner.image){

        elements.partnerPreview.src=settings.partner.image;

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

function bindName(

    input,

    target,

    refresh

){

    input.addEventListener(

        "change",

        ()=>{

            updateSettings({

                [target]:{

                    name:

                    input.value.trim()

                    ||

                    (target==="self"

                    ?"自分"

                    :"相手")

                }

            });

            refresh();

        }

    );

}

function bindImagePicker(

    button,

    input,

    preview,

    deleteButton,

    target,

    refresh

){

    button.addEventListener(

        "click",

        ()=>input.click()

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

            refresh();

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

            refresh();

        }

    );

}

function updateDeleteButton(

    preview,

    button

){

    button.style.display=

        preview.hasAttribute("src")

        ?"block"

        :"none";

}

function createColorPalette(

    container,

    target,

    refresh

){

    container.replaceChildren();

    COLORS.forEach(

        (color)=>{

            const button=

                document.createElement(

                    "button"

                );

            button.type="button";

            button.className=

                "color-button";

            button.style.background=

                color;

            if(

                settings[target].color===color

            ){

                button.classList.add(

                    "active"

                );

            }

            button.addEventListener(

                "click",

                ()=>{

                    updateSettings({

                        [target]:{

                            color:color

                        }

                    });

                    refresh();

                    createColorPalette(

                        container,

                        target,

                        refresh

                    );

                }

            );

            container.appendChild(

                button

            );

        }

    );

}

function resizeImage(file){

    return new Promise((resolve)=>{

        const reader=

            new FileReader();

        reader.onload=()=>{

            const image=

                new Image();

            image.onload=()=>{

                const canvas=

                    document.createElement(

                        "canvas"

                    );

                const size=300;

                canvas.width=size;

                canvas.height=size;

                const context=

                    canvas.getContext(

                        "2d"

                    );

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

            image.src=

                reader.result;

        };

        reader.readAsDataURL(file);

    });

}
