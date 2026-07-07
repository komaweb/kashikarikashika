import { getHistory, removeHistory } from "../history.js";
import { formatDate, formatMoney } from "./format.js";

export function renderHistory(settings, refresh){

    const list = document.getElementById("historyList");

    const history = getHistory();

    if(history.length === 0){

        list.innerHTML = `
            <p class="empty">
                履歴はまだありません
            </p>
        `;

        return;

    }

    list.innerHTML = "";

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
                ${person.name}が
                ${formatMoney(item.amount)}
                支払いました
            </div>

        `;

        const button = document.createElement("button");

        button.className = "delete-button";

        button.textContent = "削除";

        button.onclick = ()=>{

            if(!confirm("この履歴を削除しますか？")){

                return;

            }

            removeHistory(item.id);

            refresh();

        };

        card.appendChild(button);

        list.appendChild(card);

    });

}
