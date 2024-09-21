// Function to embed the external component via iframe
function embedIframe(targetSpan) {
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

    // Append the iframe to the target span
    targetSpan.appendChild(iframe);

    console.log("Iframe with external component loaded.");
  }
}

// Function to scan for specific text and replace it with an iframe
function scanAndReplace() {
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
    // Run the iframe replacement
    embedIframe(targetSpan);
  }
}

// MutationObserver to detect new elements added to the page
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Call the scan and replace function when a new node is added
      scanAndReplace();
    }
  }
});

// Observe the entire body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Run the initial scan to catch any existing instances
setTimeout(scanAndReplace, 500);
