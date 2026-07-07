export const historyData = [];

export function addHistory(data){

    historyData.unshift(data);

}

export function getHistory(){

    return historyData;

}
