import { createCard } from "./components/card.js";
import { settings } from "../settings.js";
import {
    formatDate,
    formatMoney
} from "./format.js";

export function createHistoryCard(item, onDelete){

    const person =
        item.payer === "self"
            ? settings.self
            : settings.partner;

    const card = createCard("history-card");

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

        button.className =
            "button button-danger delete-button";

        button.textContent = "取り消す";

        button.onclick = ()=>{

            if(confirm(
                "この支払いを取り消しますか？\n\n取り消した支払いは履歴に残ります。"
            )){

                onDelete(item.id);

            }

        };

        card.appendChild(button);

    }

    return card;

}
