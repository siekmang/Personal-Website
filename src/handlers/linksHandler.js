export function linksHandler() {
  //These are variables for the below functions that handle the more/less button on the links page
  const linksMore = document.getElementById("links-more-button");
  const linksMoreDiv = document.getElementById("link-more");

  //This sets the initial state of the more links div to none
  if (linksMore) {
    linksMoreDiv.style.display = "none";

    // This handles the more/less button on the links page. It checks for a pointerdown event
    // and then checks the current state of the linksMoreDiv. If it's none, it sets it to grid
    // and changes the button text to less. If it's not none, it sets it to none and changes
    // the button text to more. It also prevents default behavior like text selection and
    // smoothly scrolls back to the current scroll position.
    linksMore.addEventListener("pointerdown", () => {
      const currentScroll = window.scrollY; // Get current scroll position

      if (linksMoreDiv.style.display === "none") {
        linksMoreDiv.style.display = "grid";
        linksMore.innerHTML = "<p>Less &uarr;</p>";
      } else {
        linksMoreDiv.style.display = "none";
        linksMore.innerHTML = "<p>More &darr;</p>";
        window.scrollTo({ top: currentScroll, behavior: "smooth" }); // Smoothly adjust scroll
      }
    });
  }

  // These are variables for the below functions that handle link buttons on the links page.
  const links = document.querySelectorAll(".link-menu-div");
  const linksSub = document.querySelectorAll(".link-submenu-div");

  // This handles button behavior on my links page. The first if checks for
  // the user using a device with a fine poiner(not a touchscreen device), and then sets
  // some constants.
  if (window.matchMedia("(pointer: fine)").matches) {
    const hoverStyle = {
      transform: "scale(1.06) translateX(-47.5%)",
      transition: "all .2s",
      backgroundColor: "var(--link-button-hover-color)",
    };
    const defaultStyle = {
      transform: "scale(1) translateX(-50%)",
      transition: "all .2s",
      backgroundColor: "var(--menu-pill-color)",
    };
    const clickStyle = {
      transform: "scale(1) translateX(-50%)",
      transition: "all .01s",
    };

    // This is where it listens for different mouse events and changes
    // style based on those events
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        Object.assign(link.style, hoverStyle);
      });

      link.addEventListener("mouseout", () => {
        Object.assign(link.style, defaultStyle);
      });

      link.addEventListener("mousedown", () => {
        Object.assign(link.style, clickStyle);
      });
    });

    linksSub.forEach((link) => {
      link.addEventListener("mouseover", () => {
        Object.assign(link.style, hoverStyle);
      });

      link.addEventListener("mouseout", () => {
        Object.assign(link.style, defaultStyle);
      });

      link.addEventListener("mousedown", () => {
        Object.assign(link.style, clickStyle);
      });
    });
  }
}
