 import{greeting1}  from "./home.js";
 import{greeting2}  from "./menu.js";
 import{greeting3}  from "./about.js";

 import{homePage}  from "./home.js";
 import{menuPage}  from "./menu.js";
 import{aboutPage}  from "./about.js";
 
import "./styles.css";

 console.log(greeting1);
 console.log(greeting2);
 console.log(greeting3);
  
 const allBtn = document .querySelector("button")
 const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contentPage = document.querySelector("#content");
 



//add functionality to buttons
//  allBtn.addEventListener("click",()=>{
   
//  });

homeBtn.addEventListener("click", ()=>{
  document.contentPage.textContent=homePage() ;
 });
 
 menuBtn.addEventListener("click", ()=>{
   document.contentPage.textContent=menuPage() ; 
 });
 
 aboutBtn.addEventListener("click", ()=>{
   document.contentPage.textContent=aboutPage() ; 
 });

//  function currentPage(){
//   if ( )
//  }