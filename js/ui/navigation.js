const PAGE_ROOT = document.getElementById("app");

let currentPage = "";

export async function showPage(page, onLoaded = null){

    if(currentPage === page){

        return;

    }

    currentPage = page;

    const response = await fetch(`pages/${page}.html`);

    PAGE_ROOT.innerHTML = await response.text();

    if(onLoaded){

        onLoaded();

    }

}

export function getCurrentPage(){

    return currentPage;

}
