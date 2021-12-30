import "../styles.css";
import {selectTab} from "./tabs"

const [homeButton, menuButton, contactButton] = document.querySelectorAll(".tab-button");

selectTab(homeButton); // home is default tab

homeButton.addEventListener("click", selectTab.bind(this, homeButton));
menuButton.addEventListener("click", selectTab.bind(this, menuButton));
contactButton.addEventListener("click", selectTab.bind(this, contactButton));
