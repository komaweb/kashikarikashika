export function createBottomNavigation(currentPage){

    const nav = document.createElement("nav");

    nav.className = "bottom-navigation";

    nav.appendChild(

        createButton({

            id:"moneyTab",

            icon:"🏠",

            label:"貸し借り",

            active:currentPage==="money"

        })

    );

    nav.appendChild(

        createButton({

            id:"historyTab",

            icon:"📊",

            label:"履歴",

            active:currentPage==="history"

        })

    );

    nav.appendChild(

        createButton({

            id:"settingsTab",

            icon:"⚙️",

            label:"設定",

            active:currentPage==="settings"

        })

    );

    return nav;

}

function createButton({

    id,

    icon,

    label,

    active=false

}){

    const button=document.createElement("button");

    button.id=id;

    button.className="nav-button";

    if(active){

        button.classList.add("active");

    }

    button.innerHTML=`

        <span class="nav-icon">

            ${icon}

        </span>

        <span class="nav-label">

            ${label}

        </span>

    `;

    return button;

}
