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
};

// target form element
const destinationForm = document.getElementById("destination-form");

// add submit event listener
destinationForm.addEventListener("submit", handleSubmit);
