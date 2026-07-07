const HISTORY_KEY = "kashikarikashika-history";

export function saveHistory(history){

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );

}

export function loadHistory(){

    const data = localStorage.getItem(HISTORY_KEY);

    if(!data){

        return [];

    }

    try{

        return JSON.parse(data);

    }catch(error){

        console.error(error);

        return [];

    }

}
