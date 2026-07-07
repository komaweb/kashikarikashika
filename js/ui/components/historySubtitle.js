import { createText } from "./text.js";

export function createHistorySubtitle(item){

    if(!item.deleted){

        return null;

    }

    if(!item.title){

        return null;

    }

    return createText({

        text:item.title,

        classes:["history-subtitle"]

    });

}
