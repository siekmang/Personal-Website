export function themeSwitchGen() {
  const darkSwitchElem = document.querySelector("#dark-switch-hover");
  darkSwitchElem.innerHTML = `<div class="theme-switch-wrapper">
                                <button id="themeToggle" aria-pressed="false" aria-label="Toggle theme" title="Toggle theme" class="theme-toggle-astro">
                                        <span id="themeToggleMoon" class="theme-icon" style="display:none" aria-hidden="true">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>
                                        </span>
                                        <span id="themeToggleSun" class="theme-icon" style="display:none" aria-hidden="true">
                                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                                                  <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M18.65 18.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M18.65 5.35l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                                </svg>
                                        </span>
                                </button>
                </div>`;
}
