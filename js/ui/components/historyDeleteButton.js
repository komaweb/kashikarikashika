import { createButton } from "./button.js";

export function createHistoryDeleteButton(item,onDelete){

    if(item.deleted){

        return null;

    }

    return createButton({

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

    });

}
