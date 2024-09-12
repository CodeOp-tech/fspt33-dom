// define an array to store destinations
const destinations = [];

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

const renderAlert = () => {
  // create alert
  const alert = createAlert();

  // render the alert
  const destinationsSection = document.getElementById("destinations-section");

  destinationsSection.append(alert);
};

const render = () => {
  // render alert if empty
  if (destinations.length === 0) {
    renderAlert();
  }
  // render cards if not empty
  else {
    // remove alert if present
    document.getElementById("alert").remove();
    console.log("BUILD CARDS IN JS FROM ARRAY");
  }
};

// target form element
const destinationForm = document.getElementById("destination-form");

// add submit event listener
destinationForm.addEventListener("submit", handleSubmit);

render();
