export function socialButtonHandler() {
  const socialButtons = document.querySelectorAll(".social-button");

  const resetAllButtons = () => {
    socialButtons.forEach((button) => {
      button.classList.remove("is-active", "no-hover");
    });
  };

  socialButtons.forEach((button) => {
    const triggerPulse = () => {
      button.classList.add("is-active");

      setTimeout(() => {
        button.classList.remove("is-active");
      }, 180);
    };

    button.addEventListener("pointerdown", triggerPulse);
  });

  window.addEventListener("blur", () => {
    socialButtons.forEach((button) => {
      button.classList.remove("is-active");
      button.classList.add("no-hover");
    });
  });

  window.addEventListener("mousemove", () => {
    socialButtons.forEach((button) => button.classList.remove("no-hover"));
  });

  window.addEventListener("pageshow", (event) => {
    resetAllButtons();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      resetAllButtons();
    }
  });
}
