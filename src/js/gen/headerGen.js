import { activePages } from "../globals.js";

export function headerGen() {
  const head = document.querySelector("head");
  let pageInfo = `<title>Home - Greg Siekman</title>
    <meta name="description" content="Personal Website of Greg Siekman">`;

  var page = window.location.pathname.split("/").pop();
  if (page === "") page = "index";

  if (page == "portfolio.html" || page == "portfolio") {
    pageInfo = `<title>Portfolio - Greg Siekman</title>
    <meta name="description" content="Privacy Policy for the website of Greg Siekman">`;
  } else if (page == "privacy.html" || page == "privacy") {
    pageInfo = `<title>Privacy Policy - Greg Siekman</title>
    <meta name="description" content="Greg Siekman's Portfolio">`;
  } else if (page == "links.html" || page == "links") {
    pageInfo = `<title>Links - Greg Siekman</title>
    <meta name="description" content="Greg Siekman's Social Media Links">`;
  } else if (page == "uses.html" || page == "uses") {
    pageInfo = `<title>Uses - Greg Siekman</title>
    <meta name="description" content="A page of tools Greg uses.">`;
  } else if (!activePages.includes(page)) {
    pageInfo = `<title>404 - Greg Siekman</title>
   <meta name="description" content="Page Not Found">`;
  }

  head.insertAdjacentHTML(
    "beforeend",
    `
    ${pageInfo}
    <meta charset="UTF-8">
    <meta name="keywords" content="Greg Siekman, Siekman, siekmang, Greg Siekman Maine">
    <meta name="author" content="Greg Siekman">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="sharepic.webp">
    <meta property="og:image:type" content="image/webp">
    <meta property="og:image:width" content="1080">
    <meta property="og:image:height" content="718">
    <meta property="og:image:alt" content="Lanscape photo of a body of water and fall trees">
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
    <link rel="shortcut icon" href="favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Greg Siekman" />
    <link rel="manifest" href="favicon/site.webmanifest" />
    <meta name="theme-color" content="#ffffff" />
    <meta http-equiv="Permissions-Policy" content="interest-cohort=()">`,
  );
}
