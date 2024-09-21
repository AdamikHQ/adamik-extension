// Function to replace all link preview images with buttons
function replaceLinkPreviewImagesWithButtons() {
  // Select all images with the 'alt' attribute in Twitter link previews
  const linkPreviewImages = document.querySelectorAll(
    'a[href*="t.co"] img[alt=""]'
  ); // Focus on empty 'alt' as in preview images

  if (linkPreviewImages.length > 0) {
    linkPreviewImages.forEach((imageElement) => {
      // Confirm we have a link preview image and not just any image
      const parentLink = imageElement.closest('a[href*="t.co"]');

      if (parentLink) {
        // Create a new button element to replace the preview image
        const donateButton = document.createElement("button");
        donateButton.textContent = "Click here to donate";
        donateButton.style.backgroundColor = "#ffcc00"; // Style the button
        donateButton.style.border = "none";
        donateButton.style.padding = "10px";
        donateButton.style.cursor = "pointer";

        // Replace the preview image with the button
        imageElement.replaceWith(donateButton);

        // Add an event listener to the button
        donateButton.addEventListener("click", () => {
          alert("Thank you for your donation!");
        });

        console.log("Link preview image replaced with a donation button.");
      }
    });
  } else {
    console.log("No link preview images found, retrying...");
    // Retry every 500ms if no preview images are found
    setTimeout(replaceLinkPreviewImagesWithButtons, 500);
  }
}

// Start the script after 500ms
setTimeout(replaceLinkPreviewImagesWithButtons, 500);
