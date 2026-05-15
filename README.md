# Address Book & Places You've Been Tracker

An interactive web application built with JavaScript to manage personal contacts and log travel experiences. This project demonstrates Object-Oriented JavaScript utilizing constructors, prototype methods, and Test-Driven Development (TDD).

**Author:** [Your Name]  
**Live Site:** [Link to your GitHub Pages site]

---

## Technical Setup Instructions
1. Clone this repository to your local machine: `git clone <repo-url>`
2. Navigate to the root directory.
3. Open `index.html` in any modern web browser, or serve it using a live server extension.

---

## Test-Driven Development (TDD) Specs

### Describe: Contact()
Test: "It should create a contact object with properties."
Code: const testContact = new Contact("Ada", "Lovelace", "123-456-7890", "London");
Expected Output: Contact { firstName: "Ada", lastName: "Lovelace", phoneNumber: "123-456-7890", address: "London" }

### Describe: AddressBook()
Test: "It should create an empty AddressBook with an empty contacts object and an initial ID of 0."
Code: const testBook = new AddressBook();
Expected Output: AddressBook { contacts: {}, currentId: 0 }

### Describe: AddressBook.prototype.addContact()
Test: "It should add a contact to the AddressBook and assign it a unique ID."
Code:
const testBook = new AddressBook();
const testContact = new Contact("Ada", "Lovelace", "123-456-7890", "London");
testBook.addContact(testContact);
Expected Output: testBook.contacts[1] === testContact

### Describe: AddressBook.prototype.findContact()
Test: "It should retrieve a contact from the book using its unique ID."
Code:
const testBook = new AddressBook();
const testContact = new Contact("Ada", "Lovelace", "123-456-7890", "London");
testBook.addContact(testContact);
const result = testBook.findContact(1);
Expected Output: Contact { firstName: "Ada", lastName: "Lovelace", id: 1 ... }

### Describe: AddressBook.prototype.deleteContact()
Test: "It should remove a contact from the book by its ID."
Code:
const testBook = new AddressBook();
const testContact = new Contact("Ada", "Lovelace", "123-456-7890", "London");
testBook.addContact(testContact);
testBook.deleteContact(1);
Expected Output: testBook.contacts[1] === undefined

### Describe: DestinationLog()
Test: "It should create an empty log for destinations."
Code: const myLog = new DestinationLog();
Expected Output: DestinationLog { places: {}, currentId: 0 }

### Describe: Place()
Test: "It should record a destination with location, landmarks, timeOfYear, and notes."
Code: const kyoto = new Place("Kyoto, Japan", "Fushimi Inari", "Autumn", "Great food.");
Expected Output: Place { location: "Kyoto, Japan", landmarks: "Fushimi Inari", timeOfYear: "Autumn", notes: "Great food." }

### Describe: DestinationLog.prototype.addPlace()
Test: "It should add a Place object into the log with an auto-incremented ID."
Code:
const myLog = new DestinationLog();
const kyoto = new Place("Kyoto, Japan", "Fushimi Inari", "Autumn", "Great food.");
myLog.addPlace(kyoto);
Expected Output: myLog.places[1] === kyoto

---
License: MIT Copyright (c) 2026 [Your Name]
