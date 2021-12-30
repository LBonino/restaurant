import "../styles.css";
import {renderHome} from "./home";
import {renderMenu} from "./menu";
import {renderContact} from "./contact";

const selectTab = (tabButton) => {
    unselectActiveTabButton();
    selectTabButton(tabButton);
    
    switch (tabButton.id) {
        case "home":
            renderHome();
            break;
        case "menu":
            renderMenu();
            break;
        case "contact":
            renderContact();
            break;
        default:
            throw Error("Invalid tab error");
    }
}

const unselectActiveTabButton = () => {
    const activeTabButton = document.getElementsByClassName("tab-button-selected")[0];
    if (activeTabButton) activeTabButton.className = "tab-button";
};
const selectTabButton = (tabButton) => tabButton.className = "tab-button tab-button-selected";


const [homeButton, menuButton, contactButton] = document.querySelectorAll(".tab-button");

selectTab(homeButton); // default tab

homeButton.addEventListener("click", selectTab.bind(this, homeButton));
menuButton.addEventListener("click", selectTab.bind(this, menuButton));
contactButton.addEventListener("click", selectTab.bind(this, contactButton));
