import { addHistory, getHistory } from "./history.js";
import { calculateBalance } from "./calculator.js";

const self = {

    name:"自分",

    icon:"😳"

};

const partner = {

    name:"相手",

    icon:"🐱"

};

export function initializeUI(){

    updateBalance();

    renderHistory();

}

export function bindEvents(){

    document
    .getElementById("selfButton")
    .addEventListener("click",()=>{

        registerPayment("self");

    });

    document
    .getElementById("partnerButton")
    .addEventListener("click",()=>{

        registerPayment("partner");

    });

}

function registerPayment(payer){

    const titleInput=document.getElementById("titleInput");

    const amountInput=document.getElementById("amountInput");

    const title=titleInput.value.trim();

    const amount=Number(amountInput.value);

    if(title===""){

        alert("タイトルを入力してください");

        return;

    }

    if(amount<=0){

        alert("金額を入力してください");

        return;

    }

    addHistory({

        id:crypto.randomUUID(),

        type:"payment",

        payer,

        title,

        amount,

        createdAt:new Date()

    });

    titleInput.value="";

    amountInput.value="";

    updateBalance();

    renderHistory();

}

function updateBalance(){

    const balance=calculateBalance(getHistory());

    const text=document.getElementById("balanceText");

    const amount=document.getElementById("balanceAmount");

    if(balance===0){

        text.textContent="精算済み！";

        amount.textContent="￥0";

        return;

    }

    if(balance>0){

        text.textContent=`${self.icon} ${self.name}が貸しています`;

        amount.textContent=`￥${balance}`;

    }else{

        text.textContent=`${partner.icon} ${partner.name}が貸しています`;

        amount.textContent=`￥${Math.abs(balance)}`;

    }

}

function renderHistory(){

    const list=document.getElementById("historyList");

    const history=getHistory();

    if(history.length===0){

        list.innerHTML=`
            <p class="empty">
                履歴はまだありません
            </p>
        `;

        return;

    }

    list.innerHTML="";

    history.forEach(item=>{

        const card=document.createElement("div");

        card.className="history-card";

        const person=item.payer==="self"
            ?self
            :partner;

        card.innerHTML=`

            <div class="history-date">

                ${formatDate(item.createdAt)}

            </div>

            <div class="history-title">

                ${item.title}

            </div>

            <div class="history-detail">

                ${person.icon}
                ${person.name}が
                ${item.amount}円支払いました

            </div>

        `;

        list.appendChild(card);

    });

}

function formatDate(date){

    const d=new Date(date);

    return `${d.getFullYear()}/${
        d.getMonth()+1
    }/${
        d.getDate()
    } ${
        d.getHours()
            .toString()
            .padStart(2,"0")
    }:${
        d.getMinutes()
            .toString()
            .padStart(2,"0")
    }`;

}
