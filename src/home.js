 export const greeting1 = "the sun is right ahead,";

 export function homePage(){
    const content = document.querySelector("#content");

    const homeHeader = document.createElement("h1");
    homeHeader.textContent=" Made with lots of love and tenderness.";
    homeHeader.setAttribute("id","home-header")

     const homeMessageH1= document.createElement("h1");
     homeMessageH1.textContent= "Small Chops";
     homeMessageH1.setAttribute("id","title");
    const homeMessage = document.createElement("p");
    homeMessage.textContent=" A Cherished Nigerian Tradition" +
         "Delight in the timeless pleasure of Small Chops, a beloved tradition that has graced Nigerian homes and celebrations for generations. Our meticulously crafted selection of bite-sized delicacies serves as the perfect prelude to your main course or a delightful accompaniment to any gathering. From crispy puff-puff and savory samosas to perfectly seasoned spring rolls and chin-chin, our extensive menu features both classic favorites and contemporary interpretations. Whether you're hosting an elegant soirée, a family celebration, or simply craving a premium snacking experience, our Small Chops add that special touch of joy to every occasion.Experience the magic of these miniature culinary treasures. Place your order today and let us bring the beloved Small Chops tradition to your table!";
            
         
         homeMessage.setAttribute("id","home-Message");

    const timeIn = document.createElement("div");
    timeIn.setAttribute("id","time-container")

    let days = ["Sunday:8am - 10pm","Monday:8am - 6pm","Tuesday:8am - 6pm","Wednesday:8am - 6pm","Thursday:8am - 6pm","Friday:8am - 6pm","Saturday:8am - 10pm"];
    
    let schedule = document.createElement("ul");
    let scheduleList = document.createElement("li");
     schedule.appendChild(scheduleList);
     scheduleList.textContent = days;
     timeIn.textContent = schedule ;
     schedule.setAttribute("id","schedule")

     

     content.innerHTML=``;
     content.appendChild(homeHeader);
     content.appendChild(homeMessageH1);
     content.appendChild(homeMessage);
    content.appendChild(schedule);


    
    

                    }