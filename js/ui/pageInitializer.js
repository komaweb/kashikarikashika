import { initializeNavigation } from "./pageNavigation.js";

export function initializePage({

    onInitialize,

    navigation

}){

    if(onInitialize){

        onInitialize();

    }

    initializeNavigation(

        navigation

    );

}
