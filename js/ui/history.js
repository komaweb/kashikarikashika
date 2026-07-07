import { getHistory, removeHistory } from "../history.js";
import { settings } from "../settings.js";
import { formatDate, formatMoney } from "./format.js";

export function renderHistory(refresh){

    const historyList = document.getElementById("historyList");

    const history = getHistory();

    if(history.length === 0){

        historyList.innerHTML = `
            <p class="empty">
                履歴はまだありません
            </p>
        `;

        return;

    }

    historyList.innerHTML = "";

    history.forEach(item=>{

        const person =
            item.payer === "self"
                ? settings.self
                : settings.partner;

        const card = document.createElement("div");

        card.className = "history-card";

        card.innerHTML = `

            <div class="history-date">
                ${formatDate(item.createdAt)}
            </div>

            ${
                item.title
                ? `
                <div class="history-title">
                    ${item.title}
                </div>
                `
                : ""
            }

            <div class="history-detail">
                ${person.icon}
                ${person.name}が支払いました
            </div>

            <div class="history-money">
                ${formatMoney(item.amount)}
            </div>

        `;

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";

        deleteButton.textContent = "削除";

        deleteButton.onclick = ()=>{

            if(!confirm("この履歴を削除しますか？")){

                return;

            }

            removeHistory(item.id);

            refresh();

        };

        card.appendChild(deleteButton);

        historyList.appendChild(card);

    });

}
