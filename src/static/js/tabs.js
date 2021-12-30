import {homeTab} from "./home";
import {menuTab} from "./menu";
import {contactTab} from "./contact";

const selectTab = (tabButton) => {
    unselectActiveTabButton();
    selectTabButton(tabButton);
    
    switch (tabButton.id) {
        case "home":
            renderTab(homeTab);
            break;
        case "menu":
            renderTab(menuTab);
            break;
        case "contact":
            renderTab(contactTab);
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

const renderTab = (tab) => {
    const heading = document.querySelector("#tab-heading");
    heading.textContent = tab.tabHeading;

    const content = document.querySelector("#tab-content");
    content.replaceChildren(tab.tabContent);
}

export {selectTab};
