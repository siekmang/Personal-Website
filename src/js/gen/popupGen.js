export function popupGen() {
  console.log("window location 4: ,", window.location.pathname);
  const privacyPopElem = document.querySelector("#popup");

  privacyPopElem.innerHTML = `<span class="popuptext" id="dark-mode-popup">
        <span id="popup-text">Your theme preferences will be saved to local storage. See <a href="privacy.html">privacy policy</a> for more.</span>
        <span id="popup-dismiss-button" aria-label="Close privacy popup."></span>
    </span>`;
}
