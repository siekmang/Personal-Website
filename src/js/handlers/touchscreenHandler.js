export function touchscreenHandler() {
  // This section handles touchscreen behavior for the social buttons on the homepage.
  if (window.matchMedia("(pointer: coarse)").matches) {
    const socialButtons = document.querySelectorAll("#social-menu ul li img");

    // This handles click-like behavior for the styling of buttons
    socialButtons.forEach((socialButton) => {
      socialButton.addEventListener("pointerdown", () => {
        socialButton.style.filter = "grayscale(0)";
        socialButton.style.opacity = "100%";
        socialButton.style.transform = "scale(1.2)";
      });

      socialButton.addEventListener("pointerup", () => {
        setTimeout(() => {
          socialButton.style.filter = "grayscale(1)";
          socialButton.style.opacity = "75%";
          socialButton.style.transform = "scale(1)";
        }, 500);
      });

      socialButton.addEventListener("blur", () => {
        socialButton.style.filter = "grayscale(1)";
        socialButton.style.opacity = "75%";
        socialButton.style.transform = "scale(1)";
      });
    });

    // This resets the style when the user returns from a tab
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        socialButtons.forEach((socialButton) => {
          socialButton.style.filter = "grayscale(1)";
          socialButton.style.opacity = "75%";
          socialButton.style.transform = "scale(1)";
        });
      }
    });

    // This resets the style when the user leaves the tab
    window.addEventListener("beforeunload", () => {
      socialButtons.forEach((socialButton) => {
        socialButton.style.filter = "grayscale(1)";
        socialButton.style.opacity = "75%";
        socialButton.style.transform = "scale(1)";
      });
    });
  }
}
