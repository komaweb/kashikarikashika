import {

    getHistory,
    deleteHistory

} from "../historyStore.js";

import {

    createHistoryCard

} from "./historyCard.js";

export function renderHistory({

    filter = "recent",

    limit = null,

    refresh

}){

    const historyList =

        document.getElementById(

            "historyList"

        );

    if(!historyList){

        return;

    }

    historyList.innerHTML = "";

    let history = getHistory();

    history = filterHistory(

        history,

        filter

    );

    if(limit){

        history = history.slice(0,limit);

    }

    if(history.length===0){

        historyList.innerHTML = `

            <p class="empty">

                履歴はありません

            </p>

        `;

        return;

    }

    history.forEach(item=>{

        historyList.appendChild(

            createHistoryCard(

                item,

                id=>{

                    deleteHistory(id);

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

        case "active":

            return history.filter(

                item=>!item.deleted

            );

        case "deleted":

            return history.filter(

                item=>item.deleted

            );

        case "recent":

        default:

            return history;

    }

}
