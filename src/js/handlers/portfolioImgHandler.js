import { content } from "../globals.js";

export function porfolioImgHandler() {
  // Set up a MutationObserver to detect changes in the content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" || mutation.type === "subtree") {
        footerOverlap();
      }
    });
  });

  // Start observing the content element for changes
  observer.observe(content, {
    childList: true,
    subtree: true,
  });

  function preventScroll(event) {
    event.preventDefault(); // Prevent the default scrolling behavior
    event.stopPropagation(); // Stop the event from propagating further
  }

  // Function to disable scrolling
  function disableScroll() {
    window.addEventListener("wheel", preventScroll, { passive: false }); // For mouse wheel
    window.addEventListener("touchmove", preventScroll, { passive: false }); // For touch devices
    window.addEventListener("keydown", preventKeyScroll, { passive: false }); // For keyboard scrolling
  }

  // Function to enable scrolling
  function enableScroll() {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventKeyScroll);
  }

  // Prevent scrolling via keyboard keys
  function preventKeyScroll(event) {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
    if (keys.includes(event.key)) {
      event.preventDefault();
    }
  }

  //Fullscreening Photography Portfolio images
  function getPics() {}
  const photogImages = document.querySelectorAll(".photo-portfolio-images");
  const fullPage = document.querySelector("#fullpage");

  if (fullPage) {
    photogImages.forEach((img) => {
      img.addEventListener("click", function () {
        fullPage.style.backgroundImage = "url(" + img.src + ")";
        fullPage.style.display = "block";
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        disableScroll();
      });
    });

    fullPage.addEventListener("click", () => {
      fullPage.style.display = "none"; // Hide the #fullpage container
      document.body.style.overflow = ""; // Re-enable scrolling
      document.documentElement.style.overflow = ""; // Re-enable scrolling
      enableScroll();
    });
  }
}
