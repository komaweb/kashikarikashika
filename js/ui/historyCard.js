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

            return createPaymentCard(

                createSettlementItem(item),

                onDelete

            );

        case "payment":

        default:

            return createPaymentCard(

                item,

                onDelete

            );

    }

}

function createSettlementItem(item){

    return{

        ...item,

        title:"カシカリナシカ",

        subtitle:"貸し借りを精算しました",

        payer:null,

        amount:Math.abs(item.amount)

    };

}

function createPaymentCard(item,onDelete){

    const card = createCard("history-card");

    if(item.deleted){

        card.classList.add(

            "history-card-deleted"

        );

    }

    append(

        card,

        createHistoryDate(item.createdAt)

    );

    append(

        card,

        createHistoryTitle(item)

    );

append(
    card,
    createMoney(item.amount)
);

append(
    card,
    createHistorySubtitle(item)
);

if(item.payer){

    const person =
        item.payer==="self"
            ? settings.self
            : settings.partner;

    append(
        card,
        createPersonLabel(person)
    );

}

    append(

        card,

        createHistoryDeletedInfo(item)

    );

    append(

        card,

        createHistoryDeleteButton(

            item,

            onDelete

        )

    );

    return card;

}

function append(parent,child){

    if(child){

        parent.appendChild(child);

    }

}
