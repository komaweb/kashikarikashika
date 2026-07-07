export function formatDate(date){

    const d = new Date(date);

    return `${d.getFullYear()}/${
        d.getMonth() + 1
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

export function formatMoney(amount){

    return `￥${amount.toLocaleString()}`;

}
