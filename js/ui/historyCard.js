import { settings } from "../settings.js";

import { createCard } from "./components/card.js";

import { createPersonLabel } from "./components/personLabel.js";
import { createMoney } from "./components/money.js";

import { createHistoryDate } from "./components/historyDate.js";
import { createHistoryTitle } from "./components/historyTitle.js";
import { createHistorySubtitle } from "./components/historySubtitle.js";
import { createHistoryDeletedInfo } from "./components/historyDeletedInfo.js";
import { createHistoryDeleteButton } from "./components/historyDeleteButton.js";

export function createHistoryCard(item,onDelete){

    switch(item.type){

        case "settlement":

            return createSettlementCard(item);

        case "payment":

        default:

            return createPaymentCard(item,onDelete);

    }

}

function createPaymentCard(item,onDelete){

    const person =
        item.payer === "self"
            ? settings.self
            : settings.partner;

    const card = createCard("history-card");

    if(item.deleted){

        card.classList.add("history-card-deleted");

    }

    append(card, createHistoryDate(item.createdAt));

    append(card, createHistoryTitle(item));

    append(card, createHistorySubtitle(item));

    append(card, createPersonLabel(person));

    append(card, createMoney(item.amount));

    append(card, createHistoryDeletedInfo(item));

    append(card, createHistoryDeleteButton(item,onDelete));

    return card;

}

function createSettlementCard(item){

    const card = createCard("history-card settlement-card");

    append(card, createHistoryDate(item.createdAt));

    append(card, createSettlementTitle());

    append(card, createMoney(item.amount));

    return card;

}

function createSettlementTitle(){

    const title = document.createElement("div");

    title.className = "history-title";

    title.textContent = "✔ 精算";

    return title;

}

function append(parent,child){

    if(child){

        parent.appendChild(child);

    }

}
