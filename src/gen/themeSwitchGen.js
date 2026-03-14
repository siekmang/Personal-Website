export function themeSwitchGen() {
  const darkSwitchElem = document.querySelector("#dark-switch-hover");

  darkSwitchElem.innerHTML = `<div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" aria-label="Switch visual theme between light and dark" />
            <div class="slider round"></div>
        </label>
        <div id="enable-text">Switch Theme</div>
    </div>`;
}
