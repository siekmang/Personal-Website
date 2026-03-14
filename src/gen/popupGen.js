export function popupGen() {
  const privacyPopElem = document.querySelector("#popup");

  privacyPopElem.innerHTML = `<span class="popuptext" id="dark-mode-popup">
        <span id="popup-dismiss-button">
            <span id="popup-x">
                <p aria-label="Close privacy popup.">x</p>
            </span>
        </span>
        <span id="popup-text">Your theme preferences will be saved to local storage. See <a href="privacy.html">privacy policy</a> for more.</span>
    </span>`;
}
