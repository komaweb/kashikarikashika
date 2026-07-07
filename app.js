import { updateBalance } from "./ui/balance.js";
import { renderHistory } from "./ui/historyView.js";
import { initializeButtons } from "./ui/buttons.js";

function refresh(){

    updateBalance();

    renderHistory(refresh);

}

document.addEventListener("DOMContentLoaded",()=>{

    refresh();

    initializeButtons(refresh);

});
