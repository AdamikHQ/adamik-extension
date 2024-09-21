import React from "react";
import ReactDOM from "react-dom";

// React Component: A simple button that shows an alert
function MyButton() {
  return React.createElement(
    "button",
    {
      style: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
      onClick: () => alert("Hello from React!"),
    },
    "Click Me!"
  );
}

// Function to replace the specific text with a React button
function replaceTextWithReactButton() {
  // Use XPath to find the span element that contains the text "Looking forward to connecting at"
  const xpath = "//span[contains(text(), 'Looking forward to connecting at')]";
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  const targetSpan = result.singleNodeValue;

  if (targetSpan) {
    // Clear the span's original content
    targetSpan.textContent = "";

    // Create a div where the React component will be rendered
    const reactRoot = document.createElement("div");
    targetSpan.appendChild(reactRoot);

    // Render the React button into the div
    ReactDOM.render(React.createElement(MyButton), reactRoot);

    console.log("Text replaced with React button.");
  } else {
    console.log("Text not found, retrying...");
    // Retry if the text is not found
    setTimeout(replaceTextWithReactButton, 500);
  }
}

// Run the replacement function after a short delay
setTimeout(replaceTextWithReactButton, 500);
