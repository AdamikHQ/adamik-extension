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
    targetSpan.textContent = ""; // Clear the span's original content
    const reactRoot = document.createElement("div");
    targetSpan.appendChild(reactRoot);
    ReactDOM.render(React.createElement(MyButton), reactRoot);
  } else {
    setTimeout(replaceTextWithReactButton, 500); // Retry if not found
  }
}

setTimeout(replaceTextWithReactButton, 500); // Delay the execution to allow content to load
