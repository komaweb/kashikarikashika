import { createText } from "./text.js";

export function createHistorySubtitle(item){

    if(item.deleted){

        if(!item.title){

            return null;

        }

        return createText({

            text:item.title,

            classes:["history-subtitle"]

        });

    }

    const subtitle =

        item.subtitle;

    if(!subtitle){

        return null;

    }

    return createText({

        text:subtitle,

        classes:["history-subtitle"]

    });

}
