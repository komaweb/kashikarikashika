import { renderHistory } from "./historyView.js";

let currentFilter = "active";

export function initializeHistoryView(){

    currentFilter = "active";

    initializeTabs();

    refreshHistoryView();

}

export function refreshHistoryView(){

    renderHistory({

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

    setTabActive(

        "historyActiveTab",

        currentFilter==="active"

    );

    setTabActive(

        "historyDeletedTab",

        currentFilter==="deleted"

    );

}

function setTabActive(

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
