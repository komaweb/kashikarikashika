export function calculateBalance(history){

    let balance = 0;

    for(const item of history){

        if(item.deleted){

            continue;

        }

        if(item.type==="settlement"){

            break;

        }

        if(item.type==="payment"){

            if(item.payer==="self"){

                balance += item.amount;

            }else{

                balance -= item.amount;

            }

        }

    }

    return balance;

}

export function getBalanceStatus(balance){

    if(balance > 0){

        return "self";

    }

    if(balance < 0){

        return "partner";

    }

    return "none";

}
