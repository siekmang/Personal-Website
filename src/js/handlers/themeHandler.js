export function themeHandler() {
  console.log("window location 5: ,", window.location.pathname);
  const astroBtn = document.getElementById("themeToggle");
  const astroMoon = document.getElementById("themeToggleMoon");
  const astroSun = document.getElementById("themeToggleSun");
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const DARK_THEME_COLOR = "#273745";
  const LIGHT_THEME_COLOR = "#415b74";

  function privacyPopup() {
    const clickHistory = localStorage.getItem("clickHist");
    if (clickHistory === null) {
      const p = document.querySelector("#popup");
      if (p) p.style.display = "unset";
      try {
        localStorage.setItem("clickHist", "clicked");
      } catch (e) {}
    }
  }

  function getCurrentTheme() {
    return (
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" || theme.endsWith("-dark")
          ? DARK_THEME_COLOR
          : LIGHT_THEME_COLOR,
      );
    }
  }

  function updateAstroButton() {
    if (!astroBtn) return;
    const theme = getCurrentTheme();
    const darkMode = theme === "dark" || theme.endsWith("-dark");
    const actionText = darkMode
      ? "Switch to light theme"
      : "Switch to dark theme";
    astroBtn.setAttribute("aria-pressed", String(!darkMode));
    astroBtn.setAttribute("aria-label", actionText);
    astroBtn.setAttribute("title", actionText);
    if (astroMoon) astroMoon.style.display = darkMode ? "inline" : "none";
    if (astroSun) astroSun.style.display = darkMode ? "none" : "inline";
  }

  // initialize
  updateAstroButton();

  if (astroBtn) {
    astroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const cur = getCurrentTheme();
      const next = cur === "dark" || cur.endsWith("-dark") ? "light" : "dark";
      setTheme(next);
      privacyPopup();
      updateAstroButton();
    });
  }
}
