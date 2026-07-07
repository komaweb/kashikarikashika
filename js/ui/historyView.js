import {
    getHistory,
    deleteHistory
} from "../historyStore.js";

import { createHistoryCard } from "./historyCard.js";

export function renderHistory(refresh){

    const historyList =
        document.getElementById("historyList");

    const history = getHistory();

    historyList.innerHTML = "";

    if(history.length === 0){

        historyList.innerHTML = `
            <p class="empty">
                履歴はまだありません
            </p>
        `;

        return;

    }

    history.forEach(item=>{

        const card = createHistoryCard(

            item,

            id=>{

                deleteHistory(id);

                refresh();

            }

        );

        historyList.appendChild(card);

    });

}
