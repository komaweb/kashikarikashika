import {

    getHistory

} from "../historyStore.js";

import {

    createHistoryCard

} from "./historyCard.js";

export function renderHistory({

    target,

    filter = "active",

    limit = null,

    refresh

}){

    target.innerHTML = "";

    let history = getHistory();

    history = filterHistory(

        history,

        filter

    );

    if(limit){

        history = history.slice(0,limit);

    }

    if(history.length===0){

        target.innerHTML = `

            <p class="empty">

                履歴はありません

            </p>

        `;

        return;

    }

    history.forEach(item=>{

        target.appendChild(

            createHistoryCard(

                item,

                id=>{

                    refresh();

                }

            )

        );

    });

}

function filterHistory(

    history,

    filter

){

    switch(filter){

        case "deleted":

            return history.filter(

                item=>item.deleted

            );

        case "active":

        default:

            return history.filter(

                item=>!item.deleted

            );

    }

}
