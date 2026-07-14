import { content } from "../globals.js";

export function footerHandler() {
  //Declaring variables for the footer and content
  let footer = document.querySelector("#footer");
  let footerP = document.querySelector("#footer p");
  let footerLink = document.querySelector("#footer a");

  //Need to check anytime the webpage changes, or scroll(need to look into this)
  //If overlap == true, do something that makes the footer more visible

  function footerOverlap() {
    //Declaring the space footer and content live in, and what an overlap is
    let footerSpace = footer.getBoundingClientRect();
    let contentSpace = content.getBoundingClientRect();
    let overlap =
      footerSpace.right > contentSpace.left &&
      footerSpace.top < contentSpace.bottom;

    //Check if there is an overlap, add the background and blur or else make sure it isn't there
    if (overlap) {
      footer.style.backgroundColor = "var(--menu-pill-color)";
      footer.style.backdropFilter = "var(--foot-backdrop-filter)";
      footerP.style.color = "var(--font-color)";
      footerLink.style.color = "var(--cont-color)";
      footer.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    } else {
      footer.style.backgroundColor = "transparent";
      footer.style.backdropFilter = "none";
      footer.style.border = "none";
      //footerP.style.color = '#e2e6eb';
      //footerLink.style.color = '#e2e6eb';
    }
  }

  //Initialize footerOverlap
  footerOverlap();

  // Check for overlap when the page loads
  window.addEventListener("load", footerOverlap);

  //Listen for window resize or scroll and then run footerOverlap
  window.addEventListener("resize", footerOverlap);
  window.addEventListener("scroll", footerOverlap);
}
