// Function to embed the external component via iframe
function embedIframe() {
  // Use XPath to find the span element that contains the text "Looking forward to connecting at"
  const xpath =
    "//span[contains(text(), 'If you are hacking around, come and say Hi !')]";
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  const targetSpan = result.singleNodeValue;

  if (targetSpan) {
    // Clear the span's content
    targetSpan.textContent = "";

    // Create an iframe element
    const iframe = document.createElement("iframe");
    iframe.src = "https://adamik-blinks.vercel.app/default"; // The URL of the external component
    iframe.style.width = "452px"; // Match width of the component
    iframe.style.height = "424px"; // Match height of the component
    iframe.style.border = "none"; // Remove the border of the iframe
    iframe.style.overflow = "hidden"; // Ensure no scrollbars are shown
    iframe.scrolling = "no"; // Prevent iframe scrolling

    // Adjust the iframe height dynamically based on content
    iframe.onload = function () {
      iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
    };

    // Append the iframe to the target span
    targetSpan.appendChild(iframe);

    console.log("Iframe with external component loaded.");
  } else {
    console.log("Target span not found, retrying...");
    // Retry if the text is not found
    setTimeout(embedIframe, 500);
  }
}

// Run the function after a short delay to make sure the target element is available
setTimeout(embedIframe, 500);
