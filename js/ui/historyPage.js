import { renderHistory } from "./historyView.js";

let currentFilter = "active";

export function initializeHistoryPage(){

    initializeTabs();

    refreshHistoryPage();

}

export function refreshHistoryPage(){

    renderHistory({

        target:

            document.getElementById(

                "historyList"

            ),

        filter:currentFilter,

        refresh:refreshHistoryPage

    });

}

function initializeTabs(){

    const activeTab =

        document.getElementById(

            "historyActiveTab"

        );

    const deletedTab =

        document.getElementById(

            "historyDeletedTab"

        );

    if(activeTab){

        activeTab.addEventListener(

            "click",

            ()=>{

                changeTab(

                    "active"

                );

            }

        );

    }

    if(deletedTab){

        deletedTab.addEventListener(

            "click",

            ()=>{

                changeTab(

                    "deleted"

                );

            }

        );

    }

}

function changeTab(filter){

    currentFilter = filter;

    updateTabStyle();

    refreshHistoryPage();

}

function updateTabStyle(){

    const activeTab =

        document.getElementById(

            "historyActiveTab"

        );

    const deletedTab =

        document.getElementById(

            "historyDeletedTab"

        );

    activeTab?.classList.toggle(

        "active",

        currentFilter==="active"

    );

    deletedTab?.classList.toggle(

        "active",

        currentFilter==="deleted"

    );

}
