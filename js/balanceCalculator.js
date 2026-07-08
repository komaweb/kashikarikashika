import { getHistory } from "./historyStore.js";

export function calculateBalance(){

    const history = getHistory();

    let balance = 0;

    for(const item of history){

        if(item.deleted){

            continue;

        }

        if(item.type==="settlement"){

            break;

        }

        if(item.payer==="self"){

            balance += item.amount;

        }else{

            balance -= item.amount;

        }

    }

    return balance;

}
