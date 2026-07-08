import {
    addHistory,
    addSettlement
} from "../historyStore.js";

import {
    getHistory
} from "../historyStore.js";

import {
    calculateBalance
} from "../calculator.js";

import { formatMoney } from "./format.js";

export function initializeButtons(refresh){

    bindPaymentButton(

        "selfButton",

        "self",

        refresh

    );

    bindPaymentButton(

        "partnerButton",

        "partner",

        refresh

    );

    bindSettlementButton(

        refresh

    );

}

function bindPaymentButton(

    id,

    payer,

    refresh

){

    const button = document.getElementById(id);

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        ()=>{

            registerPayment(

                payer,

                refresh

            );

        }

    );

}

function bindSettlementButton(refresh){

    const button = document.getElementById(

        "settlementButton"

    );

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        ()=>{

            registerSettlement(

                refresh

            );

        }

    );

}

function registerPayment(

    payer,

    refresh

){

    const titleInput =

        document.getElementById(

            "titleInput"

        );

    const amountInput =

        document.getElementById(

            "amountInput"

        );

    const title =

        titleInput.value.trim();

    const amount =

        Number(

            amountInput.value

        );

    if(amount<=0){

        alert(

            "金額を入力してください。"

        );

        return;

    }

    addHistory({

        id:crypto.randomUUID(),

        payer,

        title,

        amount,

        createdAt:new Date()

    });

    titleInput.value="";

    amountInput.value="";

    refresh();

}

function registerSettlement(refresh){

    const balance = calculateBalance(

        getHistory()

    );

    if(balance===0){

        alert(

            "貸し借りがありません。"

        );

        return;

    }

    const message =

`精算を記録しますか？

${formatMoney(Math.abs(balance))} の貸し借りを精算済みとして記録します。`;

    const result = confirm(

        message

    );

    if(!result){

        return;

    }

addSettlement(
    balance
);

    refresh();

}
