import { load, save } from "./storage.js";

const STORAGE_NAME = "history";

const historyData = load(STORAGE_NAME, []);

export function getHistory(){

    return historyData;

}

export function addHistory(history){

    historyData.unshift(history);

    save(STORAGE_NAME, historyData);

}

export function removeHistory(id){

    const index = historyData.findIndex(item=>item.id===id);

    if(index === -1){

        return;

    }

    historyData.splice(index, 1);

    save(STORAGE_NAME, historyData);

}

export function clearHistory(){

    historyData.length = 0;

    save(STORAGE_NAME, historyData);

}
