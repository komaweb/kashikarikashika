import { createText } from "./text.js";

import { formatDate } from "../format.js";

export function createHistoryDeletedInfo(item){

    if(!item.deleted){

        return null;

    }

    return createText({

        text:`取り消し日時 ${formatDate(item.deletedAt)}`,

        classes:["history-deleted-date"]

    });

}
