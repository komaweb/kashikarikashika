import { createText } from "./text.js";

export function createHistoryTitle(item){

    if(item.deleted){

        return createText({

            text:"取り消し済み",

            classes:[

                "history-title",

                "deleted-title"

            ]

        });

    }

    if(!item.title){

        return null;

    }

    return createText({

        text:item.title,

        classes:["history-title"]

    });

}
