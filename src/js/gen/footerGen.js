export function footerGen() {
  const footerDiv = document.querySelector("#footer");
  const currentYear = new Date().getFullYear();
  let footerContent = `<p>&copy; ${currentYear} Greg Siekman &bull; <a href="/privacy" rel="noopener noreferrer">Privacy Policy</a></p>`;

  var page = window.location.pathname.split("/").pop();

  if (page == "privacy.html" || page == "privacy") {
    footerContent = `<p>&copy; ${currentYear} Greg Siekman &bull; <a href="/index" rel="noopener noreferrer">Home</a></p>`;
  }

  footerDiv.innerHTML = `${footerContent}`;
}
