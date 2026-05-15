
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

/
function DestinationLog() {
  this.places = {};
  this.currentId = 0;
}

DestinationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

DestinationLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

DestinationLog.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

const globalAddressBook = new AddressBook();
const globalDestinationLog = new DestinationLog();


function displayContactDetails(addressBookToDisplay) {
  const contactsList = document.getElementById("contacts-list");
  let htmlForContactInfo = "";
  
  Object.keys(addressBookToDisplay.contacts).forEach(function(id) {
    const contact = addressBookToDisplay.findContact(id);
    htmlForContactInfo += `<li class="list-group-item clickable-item d-flex justify-content-between align-items-center" id="${contact.id}">
      ${contact.firstName} ${contact.lastName}
      <button class="btn btn-sm btn-danger deleteButton" data-id="${contact.id}">Delete</button>
    </li>`;
  });
  contactsList.innerHTML = htmlForContactInfo;
}

function showContact(contactId) {
  const contact = globalAddressBook.findContact(contactId);
  const detailsDiv = document.getElementById("contact-details");
  detailsDiv.classList.remove("d-none");
  
  detailsDiv.innerHTML = `
    <h4 class="h6 fw-bold text-primary">Contact Details</h4>
    <p class="mb-1"><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
    <p class="mb-1"><strong>Phone:</strong> ${contact.phoneNumber}</p>
    <p class="mb-0"><strong>Address:</strong> ${contact.address}</p>
  `;
}

function attachContactListeners() {
  const contactsList = document.getElementById("contacts-list");
  
  contactsList.addEventListener("click", function(event) {
    // If delete button is clicked
    if (event.target.classList.contains("deleteButton")) {
      event.stopPropagation();
      const idToDelete = event.target.getAttribute("data-id");
      globalAddressBook.deleteContact(idToDelete);
      document.getElementById("contact-details").classList.add("d-none");
      displayContactDetails(globalAddressBook);
      return;
    }
    
    // If the list item itself is clicked
    const listItem = event.target.closest("li");
    if (listItem) {
      showContact(listItem.id);
    }
  });
}

// --- Places UI Helper Functions ---
function displayPlaceDetails(logToDisplay) {
  const placesList = document.getElementById("places-list");
  let htmlForPlaceInfo = "";
  
  Object.keys(logToDisplay.places).forEach(function(id) {
    const place = logToDisplay.findPlace(id);
    htmlForPlaceInfo += `<li class="list-group-item clickable-item" id="place-${place.id}">${place.location}</li>`;
  });
  placesList.innerHTML = htmlForPlaceInfo;
}

function showPlace(placeId) {
  const cleanId = placeId.replace("place-", "");
  const place = globalDestinationLog.findPlace(cleanId);
  const detailsDiv = document.getElementById("place-details");
  detailsDiv.classList.remove("d-none");
  
  detailsDiv.innerHTML = `
    <h4 class="h6 fw-bold text-success">Destination Specs</h4>
    <p class="mb-1"><strong>Location:</strong> ${place.location}</p>
    <p class="mb-1"><strong>Top Landmarks:</strong> ${place.landmarks}</p>
    <p class="mb-1"><strong>Season visited:</strong> ${place.timeOfYear}</p>
    <p class="mb-0"><strong>Notes:</strong> <em>"${place.notes}"</em></p>
  `;
}

function attachPlacesListeners() {
  document.getElementById("places-list").addEventListener("click", function(event) {
    const listItem = event.target.closest("li");
    if (listItem) {
      showPlace(listItem.id);
    }
  });
}


window.addEventListener("load", function() {
  attachContactListeners();
  attachPlacesListeners();
  
  
  document.getElementById("new-contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    
    const newContact = new Contact(firstName, lastName, phone, address);
    globalAddressBook.addContact(newContact);
    
    displayContactDetails(globalAddressBook);
    
    
    document.getElementById("new-contact-form").reset();
  });

  
  document.getElementById("new-place-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const location = document.getElementById("place-location").value;
    const landmarks = document.getElementById("place-landmarks").value;
    const time = document.getElementById("place-time").value;
    const notes = document.getElementById("place-notes").value;
    
    const newPlace = new Place(location, landmarks, time, notes);
    globalDestinationLog.addPlace(newPlace);
    
    displayPlaceDetails(globalDestinationLog);
    
    
    document.getElementById("new-place-form").reset();
  });
});