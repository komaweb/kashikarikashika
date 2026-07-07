const PREFIX = "kashikarikashika";

function getKey(name){

    return `${PREFIX}-${name}`;

}

export function save(name, data){

    localStorage.setItem(

        getKey(name),

        JSON.stringify(data)

    );

}

export function load(name, defaultValue = null){

    const data = localStorage.getItem(

        getKey(name)

    );

    if(data === null){

        return defaultValue;

    }

    try{

        return JSON.parse(data);

    }catch(error){

        console.error(error);

        return defaultValue;

    }

}

export function remove(name){

    localStorage.removeItem(

        getKey(name)

    );

}

export function clear(){

    Object.keys(localStorage).forEach(key=>{

        if(key.startsWith(PREFIX)){

            localStorage.removeItem(key);

        }

    });

}
