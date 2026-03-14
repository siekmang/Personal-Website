import { activePages } from "../globals.js";

export function nametagGen() {
  let nametag = document.querySelector("#nametag");
  let header = `<h1>GREG SIEKMAN</h1>`;

  var page = window.location.pathname.split("/").pop();
  if (page === "") page = "index";

  if (page == "privacy.html" || page == "privacy") {
    header = `<h1 class="privacy-h1">PRIVACY POLICY</h1>`;
  } else if (!activePages.includes(page)) {
    header = "";
  }

  nametag.innerHTML = `
    ${header}
    <div class="menu-pill">
        <ul class="site-nav">
            <li class="site-nav-item"><a href="index.html" rel="noopener noreferrer">Home</a></li>
            <li class="site-nav-item"><a href="portfolio.html" rel="noopener noreferrer">Portfolio</a></li>
            <li class="site-nav-item"><a href="privacy.html" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>
    </div>
  `;
}
