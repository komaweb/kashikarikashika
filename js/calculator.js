export function calculateBalance(history){

    let balance = 0;

    history.forEach(item=>{

        if(item.type !== "payment") return;

        if(item.payer === "self"){

            balance += item.amount;

        }else{

            balance -= item.amount;

        }

    });

    return balance;

}
