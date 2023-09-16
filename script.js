const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobile');
const contactList = document.getElementById('contact-list');
let contacts = [];

// Function to add a contact
function addContact(name, mobile) {
    const contact = { name, mobile };
    contacts.push(contact);
    renderContacts();
}

// Function to render contacts
function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
            <span>${contact.name} - ${contact.mobile}</span>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(contactDiv);
    });
}

// Function to edit a contact
function editContact(index) {
    const updatedName = prompt('Enter updated name:', contacts[index].name);
    const updatedMobile = prompt('Enter updated mobile number:', contacts[index].mobile);
    if (updatedName !== null && updatedMobile !== null) {
        contacts[index].name = updatedName;
        contacts[index].mobile = updatedMobile;
        renderContacts();
    }
}

// Function to delete a contact
function deleteContact(index) {
    const confirmation = confirm('Are you sure you want to delete this contact?');
    if (confirmation) {
        contacts.splice(index, 1);
        renderContacts();
    }
}

// Event listener for form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const mobile = mobileInput.value;
    addContact(name, mobile);
    nameInput.value = '';
    mobileInput.value = '';
});
