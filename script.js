// JAVASCRIPT LAB 3 PT.1 - ADDRESS BOOK
// Task: Build an object-oriented console address book application.
// The AddressBook class:
// Properties
// ● contacts: an empty array.
// Methods
// ● add(name, email, phone, relation): Makes a new Contact instance and adds it to
// this AddressBook’s contacts.
// ● deleteAt(index): Removes a contact based on the provided index.
// The Contact class:
// The class has a name, email, phone, and relation property. All four can be set by passing
// them into the constructor.
// The print function:
// This function takes an instance of AddressBook as an argument and logs each contact to the
// console. You may name the parameter anything that you think is appropriate.
// Build Specifications:
// 1. Create the AddressBook and Contact classes.
// 2. Create the print function.
// 3. Create one instance of AddressBook called addressBook.
// 4. Call the addressBook’s add method for each member of your immediate family.
// 5. Call the addressBook’s deleteAt method at least once.
// 6. Call the print function.
// Tests: Same as build specifications.
// Example Output:

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
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

const print = function(referencetoaddressbook) {
  console.log(referencetoaddressbook);
};

let myBook = new AddressBook();
myBook.add("Sawsan", "sawsanIsCool@gmail.com", "734-789-7987", "BFF");
myBook.add("David", "davidIsCool@gmail.com", "734-5454-5454", "friend");
myBook.add("Craig", "craig@gmail.com", "734-789-7897", "dad");
myBook.add("La'Tisha", "lala@gmail.com", "734-678-1094", "mom");
myBook.add("Lindsey", "linlin@gmail.com", "654-6546", "sister");
myBook.deleteAt(1);
print(myBook);
