// target the start button
const startBtn = document.getElementById("start-btn");

// define the handler function
const handleClick = () => {
  // create section
  const sectionElement = document.createElement("section");

  // add class attr
  sectionElement.setAttribute("class", "alert");

  // add text content
  sectionElement.textContent =
    "We are facing technical difficulties, please try again later!";

  // append section to main
  const mainElement = document.querySelector("main");

  mainElement.append(sectionElement);

  // remove button
  startBtn.remove();
  // startBtn.disabled = true;
};

// register a click event to start button
startBtn.addEventListener("click", handleClick);
