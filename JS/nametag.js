let nametag = document.querySelector('#nametag');
let header = `<h1>GREG SIEKMAN</h1>`

var path = window.location.pathname;
var page = path.split("/").pop();

if(page == 'privacy.html' || page == 'privacy') {
    header = `<h1 class="privacy-h1">PRIVACY POLICY</h1>`;
} else if (page == '404.html' || page == '404') {
    header = ``;
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