// create h1
const h1Element = document.createElement("h1");

// add class attribute to h1
h1Element.setAttribute("class", "title");

// add text content to h1
h1Element.textContent = "Frontend Development";

// create h2
const h2Element = document.createElement("h2");

// add class attribute to h2
h2Element.setAttribute("class", "sub-title");

// add text content to h2
h2Element.textContent = "DOM Manipulation";

// create section
const sectionElement = document.createElement("section");

// add class attr to section
sectionElement.setAttribute("class", "banner");

// attach h1 and h2 to section
sectionElement.append(h1Element, h2Element);

// create main
const mainElement = document.createElement("main");

// attach section to main
mainElement.append(sectionElement);

// attach main to body
document.body.append(mainElement);
