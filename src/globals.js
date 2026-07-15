const pageNames = ["portfolio", "links", "index", "privacy", "uses"];

export const activePages = pageNames.flatMap((page) => [`${page}.html`, page]);

export const content = document.querySelector(".main-box");
