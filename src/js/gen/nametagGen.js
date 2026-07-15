import { activePages } from "../globals.js";

export function nametagGen() {
  var page = window.location.pathname.split("/").pop();
  let nametag = document.querySelector("#nametag");
  let header = `<h1>GREG SIEKMAN</h1>`;

  console.log(page);
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
            <li class="site-nav-item"><a href="/index" rel="noopener noreferrer">Home</a></li>
            <li class="site-nav-item"><a href="/portfolio" rel="noopener noreferrer">Works</a></li>
            <li class="site-nav-item"><a href="https://blog.siekmang.com" rel="noopener noreferrer">Blog</a></li>
            <li class="site-nav-item"><a href="/privacy" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>
    </div>
  `;
}
