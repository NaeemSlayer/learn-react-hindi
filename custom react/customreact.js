function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type); // Create a new DOM element
  domElement.innerHTML = reactElement.children; // Set the innerHTML of the DOM element
  domElement.setAttribute("href", reactElement.props.href); // Set the href attribute of the DOM element
  domElement.setAttribute("target", reactElement.props.target); // Set the target attribute of the DOM element
  
  container.appendChild(domElement); // Append the DOM element to the container
  */

  // version 2
  const domElement = document.createElement(reactElement.type); // Create a new DOM element
  domElement.innerHTML = reactElement.children; // Set the innerHTML of the DOM element
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]); // Set the attribute of the DOM element
  }
  container.appendChild(domElement); // Append the DOM element to the container
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
