export function calculateBalance(history){

    let balance = 0;

    history.forEach(item=>{

        if(item.deleted){

            return;

        }

        switch(item.type){

            case "payment":

                if(item.payer === "self"){

                    balance += item.amount;

                }else{

                    balance -= item.amount;

                }

                break;

            case "settlement":

                balance = 0;

                break;

        }

    });

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
