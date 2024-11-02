 export const greeting1 = "the sun is right ahead,";

 export function homePage(){
    const content = document.querySelector("#content");

    const homeHeader = document.createElement("h1");
    homeHeader.textContent(" Made with lots of love and tenderness.")


    const homeMessage = document.createElement("p");
    homeMessage.textContent("Over the years , Small chops has been a house old tradition. when the main course be sure to other small chops. We have been enriching our homes or centuries with our extensive selection of many varieties of small snacks to serve as a dessert or an appetize for your meals.place your order and let's keep making you happy with Small chops!!");

    const timeIn = document.createElement("div");
    timeIn.textContent(schedule);

    let schedule = document.createElement("ul");
    let scheduleList = document.createElement("li");
     schedule.appendChild(scheduleList);
     scheduleList.textContent(days);

     let days = ["Sunday:8am - 10pm","Monday:8am - 6pm","Tuesday:8am - 6pm","Wednesday:8am - 6pm","Thursday:8am - 6pm","Friday:8am - 6pm","Saturday:8am - 10pm"];
     

 }