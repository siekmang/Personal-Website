export function themeHandler() {
  // These variables are for the theme handling
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem("theme") ?? null;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const DARK_THEME_COLOR = "#273745";
  const LIGHT_THEME_COLOR = "#415b74";

  // This function sets the website theme based on system preferences
  function setThemeBasedOnSystemPreference() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      metaThemeColor.setAttribute("content", DARK_THEME_COLOR);
      toggleSwitch.checked = true;
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      metaThemeColor.setAttribute("content", LIGHT_THEME_COLOR);
      toggleSwitch.checked = false;
    }
  }

  // This checks for contents in the currentTheme const, sets data-theme if there is, and calls
  // the system preference function if not. Sets switch to on if dark mode is on.
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  } else {
    setThemeBasedOnSystemPreference();
  }

  // This function controls the privacy alert popup, allowing it to pop up only the first time
  // the user clicks the switch
  function privacyPopup() {
    const clickHistory = localStorage.getItem("clickHist");
    if (clickHistory === null) {
      document.querySelector("#popup").style.display = "unset";
      try {
        localStorage.setItem("clickHist", "clicked");
      } catch (e) {
        console.error("LocalStorage is not available:", e);
      }
    }
  }

  // This function allows the user to switch the theme
  function switchTheme(e) {
    privacyPopup();
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {
        console.error("LocalStorage is not available:", e);
      }
      metaThemeColor.setAttribute("content", DARK_THEME_COLOR);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {
        console.error("LocalStorage is not available:", e);
      }
      metaThemeColor.setAttribute("content", LIGHT_THEME_COLOR);
    }
  }

  // This looks for a switch click and triggers the setTheme function
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", switchTheme, false);
  }
}
