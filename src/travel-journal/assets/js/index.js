// define an array to store destinations
const destinations = [];

// create alert function
const createAlert = () => {
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "alert alert-info text-center");
  divElement.setAttribute("role", "alert");
  divElement.setAttribute("id", "alert");

  divElement.textContent =
    " You have no destinations. Please use the form above to live your dreams...";

  return divElement;
};

// create card function
const createCard = ({ imageUrl, destination }) => {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card destination-card m-3");

  // img
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", imageUrl);
  cardImg.setAttribute("class", "card-img-top");
  cardImg.setAttribute("alt", destination);

  // card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  // h5
  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = destination;

  // button
  const cardButton = document.createElement("button");
  cardButton.setAttribute("class", "btn btn-outline-primary w-100");
  cardButton.textContent = "View";

  cardBody.append(cardTitle, cardButton);
  cardDiv.append(cardImg, cardBody);

  return cardDiv;
};

// create result function
const createResultCard = ({ destination, imageUrl, description }) => {
  // card div
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card mb-3");

  // card row
  const cardRow = document.createElement("div");
  cardRow.setAttribute("class", "row g-0");

  // card col 1
  const cardCol1 = document.createElement("div");
  cardCol1.setAttribute("class", "col-md-4");

  // card col 2
  const cardCol2 = document.createElement("div");
  cardCol2.setAttribute("class", "col-md-8");

  // img
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", imageUrl);
  cardImg.setAttribute("class", "img-fluid rounded-start");
  cardImg.setAttribute("alt", destination);

  // card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  // card title
  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = destination;

  // card title
  const cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.textContent = description;

  // button
  const cardButton = document.createElement("button");
  cardButton.setAttribute("class", "btn btn-outline-danger w-25");
  cardButton.textContent = "Delete";

  cardBody.append(cardTitle, cardText, cardButton);
  cardCol2.append(cardBody);

  cardCol1.append(cardImg);

  cardRow.append(cardCol1, cardCol2);

  cardDiv.append(cardRow);

  return cardDiv;
};

// render the result component
const renderResult = (destination) => {
  // create the result card
  const resultCard = createResultCard(destination);

  const resultSection = document.getElementById("result-section");

  resultSection.append(resultCard);
};

// render the alert component
const renderAlert = () => {
  // create alert
  const alert = createAlert();

  // render the alert
  const destinationsSection = document.getElementById("destinations-section");

  destinationsSection.append(alert);
};

// render all cards
const renderCards = () => {
  // create parent div
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "destinations-container");
  parentDiv.setAttribute(
    "class",
    "d-flex flex-row flex-wrap justify-content-evenly"
  );

  // loop through each destination and create and render each card
  destinations.forEach((destination) => {
    // create the destination card
    const destinationCard = createCard(destination);

    // append the card to the parent
    parentDiv.append(destinationCard);
  });

  // append parent div with cards to section
  document.getElementById("destinations-section").append(parentDiv);
};

// render the page
const render = () => {
  // render alert if empty
  if (destinations.length === 0) {
    renderAlert();
  }
  // render cards if not empty
  else {
    // remove alert if present
    document.getElementById("alert")?.remove();

    // remove cards if present
    document.getElementById("destinations-container")?.remove();

    renderCards();
  }
};

// target form element
const destinationForm = document.getElementById("destination-form");

// define a submit event handler
const handleSubmit = (event) => {
  event.preventDefault();

  const destinationInput = document.getElementById("destination");

  const imageUrlInput = document.getElementById("imageUrl");

  const descriptionInput = document.getElementById("description");

  // get destination value
  const destination = destinationInput.value;

  // get imageUrl value
  const imageUrl = imageUrlInput.value;

  // get description value
  const description = descriptionInput.value;

  // create an object
  const destinationObject = {
    destination,
    imageUrl,
    description,
  };

  destinations.push(destinationObject);

  console.log(destinations);

  // clear form fields
  destinationInput.value = "";
  imageUrlInput.value = "";
  descriptionInput.value = "";

  render();
};

// add submit event listener
destinationForm.addEventListener("submit", handleSubmit);

render();
