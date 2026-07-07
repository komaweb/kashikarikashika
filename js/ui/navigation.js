export async function loadPage(page){

    const app = document.getElementById("app");

    const response = await fetch(

        `pages/${page}.html`

    );

    app.innerHTML = await response.text();

}
