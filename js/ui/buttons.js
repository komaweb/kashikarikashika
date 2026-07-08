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

    /*
        次回ここへ確認ダイアログを追加

        精算を記録しますか？

        ¥○○ の貸し借りを
        精算済みとして記録します。
    */

    addSettlement(

        Math.abs(balance)

    );

    refresh();

}
