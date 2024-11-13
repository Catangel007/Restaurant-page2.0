export const greeting3 = "look up child! look up!";

export function aboutPage (){
    const content = document.querySelector("#content");
   
    content.innerHTML = "";
    content.innerHTML=`
                    <div id="about-info"><h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nulla illum animi rerum laboriosam blanditiis sequi tenetur doloremque, ab maxime cupiditate ea dolorum nam dolorem sapiente temporibus repudiandae quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nulla illum animi rerum laboriosam blanditiis sequi tenetur doloremque, ab maxime cupiditate ea dolorum nam dolorem sapiente temporibus repudiandae quod"</p></div>;` 


}