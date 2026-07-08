import { getHistory } from "../historyStore.js";

import {

    calculateBalance,
    getBalanceStatus

} from "../calculator.js";

import { settings } from "../settings.js";

import { formatMoney } from "./format.js";

export function updateBalance(){

    const balance = calculateBalance(

        getHistory()

    );

    const status = getBalanceStatus(

        balance

    );

    const balanceText =

        document.getElementById(

            "balanceText"

        );

    const balanceAmount =

        document.getElementById(

            "balanceAmount"

        );

    switch(status){

        case "self":

            balanceText.textContent =

                `${settings.self.icon} ${settings.self.name}が貸しています`;

            balanceText.style.color =

                settings.self.color;

            balanceAmount.textContent =

                formatMoney(balance);

            break;

        case "partner":

            balanceText.textContent =

                `${settings.partner.icon} ${settings.partner.name}が貸しています`;

            balanceText.style.color =

                settings.partner.color;

            balanceAmount.textContent =

                formatMoney(

                    Math.abs(balance)

                );

            break;

        default:

            balanceText.textContent =

                "貸し借りなし！";

            balanceText.style.color =

                "var(--sub)";

            balanceAmount.textContent =

                formatMoney(0);

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
