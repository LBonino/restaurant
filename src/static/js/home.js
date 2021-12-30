const tabHeading = "The best Argentinian food";

const tabContent = (() => {
    const mainParagraph = document.createElement("p");
    mainParagraph.className = "tab-paragraph";
    mainParagraph.textContent = "La Parrilla de Raúl arguably offers some of the most delicious food in Argentina. Come here to taste juicy meats, drink the finest wines and listen to our local artists to experience our culture!";
    
    return mainParagraph;
})();

const homeTab = {tabHeading, tabContent};

export {homeTab};
