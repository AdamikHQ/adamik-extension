// Function to embed the external component via iframe
function embedIframe(targetSpan) {
  if (targetSpan) {
    console.log("Target span found. Embedding iframe...");

    // Clear the span's content
    targetSpan.textContent = "";

    // Create an iframe element
    const iframe = document.createElement("iframe");
    iframe.src = "https://adamik-blinks.vercel.app/default-base"; // The URL of the external component
    iframe.style.width = "452px"; // Match width of the component
    iframe.style.height = "444px"; // Match height of the component
    iframe.style.border = "none"; // Remove the border of the iframe
    iframe.style.overflow = "hidden"; // Ensure no scrollbars are shown
    iframe.scrolling = "no"; // Prevent iframe scrolling

    // Append the iframe to the target span
    targetSpan.appendChild(iframe);

    console.log("Iframe with external component loaded successfully.");
  } else {
    console.log("Target span not found, skipping iframe embedding.");
  }
}

// Function to scan for multiple target strings and replace them with an iframe
function scanAndReplace() {
  const replacementStrings = [
    "If you are hacking around, come and say Hi !",
    "<adamik blink>",
    // Add more strings here as needed
  ];

  console.log("Starting scan for replacement strings:", replacementStrings);

  // Loop through all replacement strings
  for (const targetText of replacementStrings) {
    const xpath = `//span[contains(text(), '${targetText}')]`;
    const result = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const targetSpan = result.singleNodeValue;

    // Log the scan result
    if (targetSpan) {
      console.log(`Found matching text: "${targetText}"`);
      embedIframe(targetSpan); // Replace the target span with the iframe
    } else {
      console.log(`No matching span found for: "${targetText}"`);
    }
  }
}

// MutationObserver to detect new elements added to the page
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("DOM mutation detected. Running scanAndReplace...");
      scanAndReplace(); // Call the scan and replace function when a new node is added
    }
  }
});

// Observe the entire body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Run the initial scan to catch any existing instances
console.log("Initial scan started...");
setTimeout(scanAndReplace, 500);
