import { calculateBalance } from "../calculator.js";
import { getHistory } from "../history.js";
import { formatMoney } from "./format.js";

export function updateBalance(settings){

    const balance = calculateBalance(getHistory());

    const text = document.getElementById("balanceText");
    const amount = document.getElementById("balanceAmount");

    if(balance === 0){

        text.textContent = "貸し借りなし！";
        amount.textContent = formatMoney(0);

        return;

    }

    if(balance > 0){

        text.textContent =
            `${settings.self.icon} ${settings.self.name}が貸しています`;

        amount.textContent = formatMoney(balance);

    }else{

        text.textContent =
            `${settings.partner.icon} ${settings.partner.name}が貸しています`;

        amount.textContent = formatMoney(Math.abs(balance));

    }

}
