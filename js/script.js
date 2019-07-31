"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(event) {
    event.preventDefault();
    let newContact = new Contact(
      document.querySelector("#full-name").value,
      document.querySelector("#user-email").value,
      document.querySelector("#phone-number").value,
      document.querySelector("#relation").value
    );
    this.contacts.push(newContact);
    this.display();
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    // for (let i = 0; i < this.contacts.length; i++) {
    //   console.log(this.contacts[i]);
    // }
    // for (const contact of this.contacts) {
    //   console.log(contact);
    // }
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
  display() {
    document.querySelector(".container").innerHTML = "";
    this.contacts.forEach((person, index) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <p>Name: ${person.name}</p>
      <p>Email: ${person.email}</p>
      <p>Phone: ${person.phone}</p>
      <p>Relation: ${person.relation}</p>
      <i index=${index} class="fas fa-trash" />
      `;
      document.querySelector(".container").append(div);
    });
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
// addressBook.add("Bobby", "rj@yahoo.com", "111-1111", "brother");
// addressBook.add("Chris", "cp@gmail.com", "222-2222", "mom");
// addressBook.add("Makel", "mp@live.com", "333-3333", "sister");

document
  .querySelector("form")
  .addEventListener("submit", event => addressBook.add(event));
document.querySelector(".container").addEventListener("click", deleteContact);

function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("index");
    addressBook.deleteAt(index);
    addressBook.display();
  }
}
