// Use querySelector to target the specific element
const previewDiv = document.querySelector("#id__wrdanadorws > div");

if (previewDiv) {
  // Create a new button element
  const donateButton = document.createElement("button");
  donateButton.textContent = "Click here to donate";
  donateButton.style.backgroundColor = "#ffcc00"; // Style the button as needed
  donateButton.style.border = "none";
  donateButton.style.padding = "10px";
  donateButton.style.cursor = "pointer";

  // Replace the preview div with the button
  previewDiv.replaceWith(donateButton);

  // Add an event listener to the button
  donateButton.addEventListener("click", () => {
    alert("Thank you for your donation!");
    // You can also redirect to a donation page, for example:
    // window.location.href = "https://donation-page.com";
  });

  console.log("Preview replaced with a donation button.");
} else {
  console.log("Preview element not found.");
}
