import { getHistory } from "../historyStore.js";

import {

    calculateBalance,
    getBalanceStatus

} from "../calculator.js";

import { settings } from "../settings.js";

import { formatMoney } from "./format.js";

export function updateBalance(){

    document.documentElement.style.setProperty(

        "--self-color",

        settings.self.color

    );

    document.documentElement.style.setProperty(

        "--partner-color",

        settings.partner.color

    );

    const balance = calculateBalance(

        getHistory()

    );

    const status = getBalanceStatus(

        balance

    );

    const balanceCard =

        document.querySelector(

            ".balance-card"

        );

    const balanceText =

        document.getElementById(

            "balanceText"

        );

    const balanceAmount =

        document.getElementById(

            "balanceAmount"

        );

    balanceCard.classList.remove(

        "balance-self",

        "balance-partner",

        "balance-none"

    );

    switch(status){

        case "self":

            balanceText.textContent =

                `${settings.partner.icon} ${settings.partner.name}が借りています`;

            balanceAmount.textContent =

                formatMoney(balance);

            balanceCard.classList.add(

                "balance-partner"

            );

            break;

        case "partner":

            balanceText.textContent =

                `${settings.self.icon} ${settings.self.name}が借りています`;

            balanceAmount.textContent =

                formatMoney(

                    Math.abs(balance)

                );

            balanceCard.classList.add(

                "balance-self"

            );

            break;

        default:

            balanceText.textContent =

                "貸し借りなし！";

            balanceAmount.textContent =

                formatMoney(0);

            balanceCard.classList.add(

                "balance-none"

            );

            break;

    }

    updateSettlementButton(

        balance

    );

}

function updateSettlementButton(balance){

    const button =

        document.getElementById(

            "settlementButton"

        );

    if(!button){

        return;

    }

    button.disabled =

        balance===0;

}
