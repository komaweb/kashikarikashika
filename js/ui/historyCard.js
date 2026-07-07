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

function append(parent,child){

    if(child){

        parent.appendChild(child);

    }

}
