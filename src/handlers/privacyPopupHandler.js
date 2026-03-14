export function privacyPopupHandler() {
  const dismissButton = document.querySelector("#popup-dismiss-button");

  // This function sets the privacy popup display to none
  function dismissButtonClick(event) {
    document.querySelector("#popup").style.display = "none";
  }

  // This checks for a click on the dismiss button on the privacy popup and triggers the
  // dismissButtonClick function to make the privacy popup disappear
  if (dismissButton) {
    dismissButton.addEventListener("click", dismissButtonClick, false);
  }
}
