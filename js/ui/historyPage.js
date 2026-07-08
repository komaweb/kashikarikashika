import { renderHistory } from "./historyView.js";

let currentFilter = "active";

export function initializeHistoryView(){

    initializeTabs();

    refreshHistoryView();

}

export function refreshHistoryView(){

    renderHistory({

        target:

            document.getElementById(

                "historyList"

            ),

        filter:currentFilter,

        refresh:refreshHistoryView

    });

}

function initializeTabs(){

    bindTab(

        "historyActiveTab",

        "active"

    );

    bindTab(

        "historyDeletedTab",

        "deleted"

    );

    updateTabs();

}

function bindTab(

    id,

    filter

){

    const button =

        document.getElementById(id);

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        ()=>{

            if(currentFilter===filter){

                return;

            }

            currentFilter=filter;

            updateTabs();

            refreshHistoryView();

        }

    );

}

function updateTabs(){

    updateTab(

        "historyActiveTab",

        currentFilter==="active"

    );

    updateTab(

        "historyDeletedTab",

        currentFilter==="deleted"

    );

}

function updateTab(

    id,

    active

){

    const button =

        document.getElementById(id);

    if(!button){

        return;

    }

    button.classList.toggle(

        "active",

        active

    );

}
