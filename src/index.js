import { greeting1 } from "./home.js";
import { greeting2 } from "./menu.js";
import { greeting3 } from "./about.js";

import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contentPage = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
 
  homePage(contentPage);
});

 menuBtn.addEventListener("click", () => {
  
   menuPage.init();
 });

aboutBtn.addEventListener("click", () => {
  contentPage.innerHTML ="";
  aboutPage(contentPage);
});

// Call the initial page to load (e.g., homepage)
//homePage(contentPage);