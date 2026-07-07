import { settings } from "../settings.js";

import { createCard } from "./components/card.js";
import { createButton } from "./components/button.js";
import { createText } from "./components/text.js";

import { createPersonLabel } from "./components/personLabel.js";
import { createMoney } from "./components/money.js";
import { createHistoryDate } from "./components/historyDate.js";

import { formatDate } from "./format.js";

export function createHistoryCard(item,onDelete){

    const person =
        item.payer === "self"
            ? settings.self
            : settings.partner;

    const card = createCard("history-card");

    if(item.deleted){

        card.classList.add("history-card-deleted");

    }

    card.appendChild(

        createHistoryDate(item.createdAt)

    );

    if(item.deleted){

        card.appendChild(

            createText({

                text:"🗑 取り消し済み",

                classes:[
                    "history-title",
                    "deleted-title"
                ]

            })

        );

    }else if(item.title){

        card.appendChild(

            createText({

                text:item.title,

                classes:["history-title"]

            })

        );

    }

    if(item.deleted && item.title){

        card.appendChild(

            createText({

                text:item.title,

                classes:["history-subtitle"]

            })

        );

    }

    card.appendChild(

        createPersonLabel(person)

    );

    card.appendChild(

        createMoney(item.amount)

    );

    if(item.deleted){

        card.appendChild(

            createText({

                text:`取り消し日時 ${formatDate(item.deletedAt)}`,

                classes:["history-deleted-date"]

            })

        );

    }else{

        card.appendChild(

            createButton({

                text:"取り消す",

                classes:[

                    "button-danger",

                    "delete-button"

                ],

                onClick:()=>{

                    if(confirm(
                        "この支払いを取り消しますか？\n\n取り消した支払いは履歴に残ります。"
                    )){

                        onDelete(item.id);

                    }

                }

            })

        );

    }

    return card;

}
