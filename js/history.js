import { saveHistory, loadHistory } from "./storage.js";

export const historyData = loadHistory();

export function addHistory(data){

    historyData.unshift(data);

    saveHistory(historyData);

}

export function removeHistory(id){

    const index = historyData.findIndex(item=>item.id===id);

    if(index===-1){

        return;

    }

    historyData.splice(index,1);

    saveHistory(historyData);

}

export function getHistory(){

    return historyData;

}
