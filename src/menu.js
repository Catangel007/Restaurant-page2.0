 export const greeting2 ="if you don't look up you might miss it";

 export function menuPage(){
    const content = document.querySelector("#content");


    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    
  const menuItem1 = document.createElement("div");
  menuItem1.setAttribute("id","menuItem");
  const menuItem1header = document.createElement("h1");
  menuItem1header.setAttribute("id","menu-header")
  menuItem1header.textContent("Samosa");
  const menuItem1image = document.createElement("img");
  menuItem1image.setAttribute("id","menu-img");
  menuItem1image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTwh_jAMEKjt1-PIvtmpDxzEEF-N8BKu0hQ&s";
  menuItem1image.alt = "picture of a triangle deep fried pastry with meat filling";
  const menuItem1price = document.createElement("p");
  menuItem1image.setAttribute("id","menu-price");
  menuItem1price.textContent("$2.99") ;

  menuItem1.appendChild(menuItem1header);
  menuItem1.appendChild(menuItem1image);
  menuItem1.appendChild(menuItem1price);
  content.textContent(menuItem1);

  const menuItem2 = document.createElement("div");
  menuItem2.setAttribute("id","menuItem");
  const menuItem2header = document.createElement("h1");
  menuItem2header.setAttribute("id","menu-header");
  menuItem2header.textContent("Puff Puff");
  const menuItem2image = document.createElement("img");
  menuItem2image.setAttribute("id","menu-img");
  menuItem2image.src = "https://sisijemimah.com/wp-content/uploads/2015/11/puff-puff-3-1024x614.jpg";
  menuItem2image.alt = "picture of soft deep fried pastry"
  const menuItem2price = document.createElement("p");
  menuItem2image.setAttribute("id","menu-img");
  menuItem2price.textContent("$1.45");

  menuItem2.appendChild(menuItem2header);
  menuItem2.appendChild(menuItem2image);
  menuItem2.appendChild(menuItem2price);
  content.textContent(menuItem2);

  
  const menuItem3 = document.createElement("div");
  menuItem3.setAttribute("id","menuItem");
  const menuItem3header = document.createElement("h1");
  menuItem3header.setAttribute("id","menu-header")
  menuItem3header.textContent("Meat pie");
  const menuItem3image = document.createElement("img");
  menuItem3image.setAttribute("id","menu-img");
  menuItem3image.src = "https://sisijemimah.com/wp-content/uploads/2015/08/image74.jpg";
  menuItem3image.alt = "picture of a semi-circle baked pastry with meat filling";
  const menuItem3price = document.createElement("p");
  menuItem3image.setAttribute("id","menu-img");
  menuItem3price.textContent("6.99");

  menuItem3.appendChild(menuItem3header);
  menuItem3.appendChild(menuItem3image);
  menuItem3.appendChild(menuItem3price);
  content.textContent(menuItem3);
  const arrayMenuItem = [menuItem1,menuItem2,menuItem3];
  
   
        
    
  
  const scrollL = document.createElement("img");
  scrollL.classList.add("scrollL");
  scrollL.src = 
  scrollL.addEventListener("click",()=>{
      let popOut = arrayMenuItem[0];
       arrayMenuItem.shift(0);
      let tomato= arrayMenuItem.push(popOut);

     menu.textContent(tomato);
   
  })
content.textContent(scrollL);

  const scrollR = document.createElement("img");
  scrollR.classList.add("scrollR")
  scrollR.src = 
  scrollR.addEventListener("click",()=>{
      let popOut = arrayMenuItem[2];
       arrayMenuItem.pop(2);
      let tomato= arrayMenuItem.unshift(popOut);
     menu.textContent(tomato);
   
  });
content.textContent(scrollR);
 
    content.appendChild(scrollL);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(scrollR);
    

   
}