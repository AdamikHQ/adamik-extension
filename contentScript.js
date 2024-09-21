import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MetaMaskSDK } from "@metamask/sdk";

const sdk = new MetaMaskSDK({
  injectProvider: true,
  dappMetadata: { name: "Adamik Extension", url: "https://adamik.io" },
});

async function connectMetamask() {
  try {
    const addresses = await sdk.connect();
    if (addresses.length > 0) {
      console.log("Connected MetaMask account:", addresses[0]);
    } else {
      console.warn("No MetaMask account found.");
    }
  } catch (err) {
    console.error("MetaMask connection failed:", err);
  }
}

// React Component: MetaMask Button
function MetaMaskButton() {
  const [connectedAddress, setConnectedAddress] = useState(null);

  const handleConnect = async () => {
    try {
      const addresses = await sdk.connect();
      if (addresses.length > 0) {
        setConnectedAddress(addresses[0]);
        console.log("Connected MetaMask account:", addresses[0]);
      } else {
        console.warn("No MetaMask account found.");
      }
    } catch (err) {
      console.error("MetaMask connection failed:", err);
    }
  };

  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleConnect}
    >
      {connectedAddress ? `Connected: ${connectedAddress}` : "Connect MetaMask"}
    </button>
  );
}

// Function to replace the specific text with the React component
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

    // Render the MetaMask Button into the div
    ReactDOM.render(<MetaMaskButton />, reactRoot);

    console.log("Text replaced with MetaMask button.");
  } else {
    console.log("Text not found, retrying...");
    // Retry if the text is not found
    setTimeout(replaceTextWithReactButton, 500);
  }
}

// Run the replacement function after a short delay
setTimeout(replaceTextWithReactButton, 500);
