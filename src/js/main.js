import { footerGen } from "./gen/footerGen.js";
import { nametagGen } from "./gen/nametagGen.js";
import { popupGen } from "./gen/popupGen.js";
import { themeSwitchGen } from "./gen/themeSwitchGen.js";
import { headerGen } from "./gen/headerGen.js";
import { linksHandler } from "./handlers/linksHandler.js";
import { porfolioImgHandler } from "./handlers/portfolioImgHandler.js";
import { footerHandler } from "./handlers/footerHandler.js";
import { privacyPopupHandler } from "./handlers/privacyPopupHandler.js";
import { localStorageHandler } from "./handlers/localStorageHandler.js";
import { touchscreenHandler } from "./handlers/touchscreenHandler.js";
import { themeHandler } from "./handlers/themeHandler.js";

function main() {
  headerGen();
  nametagGen();
  themeSwitchGen();
  footerGen();
  popupGen();
  linksHandler();
  porfolioImgHandler();
  themeHandler();
  footerHandler();
  privacyPopupHandler();
  touchscreenHandler();
  localStorageHandler();
  console.log("window location 8: ,", window.location.pathname);
}

main();
