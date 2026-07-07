import {
    getHistory,
    deleteHistory
} from "../historyStore.js";

import { settings } from "../settings.js";

import {
    formatDate,
    formatMoney
} from "./format.js";

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

        if(item.deleted){

            card.classList.add("history-card-deleted");

        }

        let html = `

            <div class="history-date">
                ${formatDate(item.createdAt)}
            </div>

        `;

        if(item.deleted){

            html += `
                <div class="history-title deleted-title">
                    🗑 取り消し済み
                </div>
            `;

        }else if(item.title){

            html += `
                <div class="history-title">
                    ${item.title}
                </div>
            `;

        }

        if(item.title && item.deleted){

            html += `
                <div class="history-subtitle">
                    ${item.title}
                </div>
            `;

        }

        html += `

            <div class="history-detail">
                ${person.icon}
                ${person.name}が支払いました
            </div>

            <div class="history-money">
                ${formatMoney(item.amount)}
            </div>

        `;

        if(item.deleted){

            html += `
                <div class="history-deleted-date">
                    取り消し日時
                    ${formatDate(item.deletedAt)}
                </div>
            `;

        }

        card.innerHTML = html;

        if(!item.deleted){

            const button = document.createElement("button");

            button.className = "delete-button";

            button.textContent = "取り消す";

            button.onclick = ()=>{

                if(!confirm(
                    "この支払いを取り消しますか？\n\n取り消した支払いは履歴に残ります。"
                )){

                    return;

                }

                deleteHistory(item.id);

                refresh();

            };

            card.appendChild(button);

        }

        historyList.appendChild(card);

    });

}
