import { load, save } from "./storage.js";

const STORAGE_NAME = "history";

const historyData = load(STORAGE_NAME, []);

export function getHistory(){

    return historyData;

}

export function getRecentHistory(){

    return historyData;

}

export function getActiveHistory(){

    return historyData.filter(

        item=>!item.deleted

    );

}

export function getDeletedHistory(){

    return historyData.filter(

        item=>item.deleted

    );

}

export function addHistory(history){

    history.deleted = false;

    history.deletedAt = null;

    historyData.unshift(history);

    save(

        STORAGE_NAME,

        historyData

    );

}

export function deleteHistory(id){

    const item = historyData.find(

        item=>item.id===id

    );

    if(!item){

        return;

    }

    item.deleted = true;

    item.deletedAt = new Date().toISOString();

    save(

        STORAGE_NAME,

        historyData

    );

}

export function clearHistory(){

    historyData.length = 0;

    save(

        STORAGE_NAME,

        historyData

    );

}
