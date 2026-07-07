import { addHistory } from "../historyStore.js";

export function initializeButtons(refresh){

    const selfButton = document.getElementById("selfButton");
    const partnerButton = document.getElementById("partnerButton");

    selfButton.addEventListener("click",()=>{

        registerPayment("self", refresh);

    });

    partnerButton.addEventListener("click",()=>{

        registerPayment("partner", refresh);

    });

}

function registerPayment(payer, refresh){

    const titleInput = document.getElementById("titleInput");
    const amountInput = document.getElementById("amountInput");

    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);

    if(amount <= 0){

        alert("金額を入力してください。");

        return;

    }

    addHistory({

        id: crypto.randomUUID(),

        type: "payment",

        payer,

        title,

        amount,

        createdAt: new Date()

    });

    titleInput.value = "";
    amountInput.value = "";

    refresh();

}
