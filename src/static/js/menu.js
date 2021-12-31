import imgEmpanadas from "../img/wom-creative-studio-verona-D8YWzfJ8d4w-unsplash.jpg";
import imgAsado from "../img/pexels-los-muertos-crew-8279973.jpg";
import imgNapolitana from "../img/napolitana.jpg";
import imgBurger from "../img/burger.jpg";
import imgLocro from "../img/locro.jpg";
import imgFugazzetta from "../img/fugazzetta.jpg";

const createMenuItem = (name, imageSrc, imageAltText) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const itemName = document.createElement("h3");
    itemName.className = "menu-item-name";
    itemName.textContent = name;

    const itemImage = new Image();
    itemImage.className = "menu-item-image";
    itemImage.src = imageSrc;
    itemImage.alt = imageAltText;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImage);

    return menuItem;
}

const tabHeading = "Our menu";

const tabContent = (() => {
    const menu = document.createElement("div");
    menu.id = "menu-grid";

    menu.append(
        createMenuItem("Empanadas", imgEmpanadas, "Various empanadas and sauces"),
        createMenuItem("Asado", imgAsado, "A plate with grilled chorizo, meat and bread"),
        createMenuItem("Napolitana", imgNapolitana, "A table wih a Milanesa napolitana, french fries, lemon slices, mayonnaise and ketchup"),
        createMenuItem("Onion Cheddar Burger", imgBurger, "Double burger with cheddar cheese and caramelized onions"),
        createMenuItem("Locro", imgLocro, "Slices of grilled bread and Locro: a hearty thick squash stew"),
        createMenuItem("Fugazzetta", imgFugazzetta, "Slice of Fugazzetta: a double crusted pizza stuffed with cheese and topped with sweet onions"),
    )

    return menu;
})();

const menuTab = {tabHeading, tabContent};

export {menuTab};
