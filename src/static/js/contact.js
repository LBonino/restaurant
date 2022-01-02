const tabHeading = "Contact us";

const tabContent = (() => {
    const contact = document.createElement("div");
    contact.id = "contact-tab";

    const phone = document.createElement("p");
    const email = document.createElement("p");
    const address = document.createElement("p");

    phone.textContent = "(11) 3425-4293";
    email.textContent = "parrilla@raul.com";
    address.textContent = "Av. San Juan 4359, Ciudad Autónoma de Buenos Aires";

    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);

    return contact;
})();

const contactTab = {tabHeading, tabContent};

export {contactTab};
