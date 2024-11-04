 export const greeting2 ="if you don't look up you might miss it";

 export function menuPage(){

  const menuItems = [
    {
        name: "Samosa",
        price: "$2.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTwh_jAMEKjt1-PIvtmpDxzEEF-N8BKu0hQ&s",
        alt: "picture of a triangle deep fried pastry with meat filling"
    },
    {
        name: "Puff Puff",
        price: "$1.45",
        image: "https://sisijemimah.com/wp-content/uploads/2015/11/puff-puff-3-1024x614.jpg",
        alt: "picture of soft deep fried pastry"
    },
    {
        name: "Meat pie",
        price: "$6.99",
        image: "https://sisijemimah.com/wp-content/uploads/2015/08/image74.jpg",
        alt: "picture of a semi-circle baked pastry with meat filling"
    }
];

function createMenuItem({name, price, image, alt }){
  const menuItem = document.createElement('div');
  menuItem.className = "menu-item";

  menuItem.innerHTML = `
  <h1 class="menu-header">${name}</h1>
  <img class="menu-img" src="${image}" alt=${alt}>
  <p class="menu-price">${price}</p>;`

  return menuItem;
}
function createScrollButton(direction) {
  const button = document.createElement("img");
  button.className = `scroll-${direction}`;
  button.src = `src/images/${direction}-arrow.png`;
  button.alt = `Scroll ${direction}`;
  return button;
}

function rotateItems(array, direction) {
  if (direction === 'left') {
      const first = array.shift();
      array.push(first);
  } else {
      const last = array.pop();
      array.unshift(last);
  }
  updateDisplay();
}

function updateDisplay() {
  menuContainer.innerHTML = '';
  menuContainer.appendChild(scrollLeft);
  function createScrollButton(direction) {
        const button = document.createElement("img");
        button.className = `scroll-${direction}`;
        button.src = `src/images/${direction}-arrow.png`;
        button.alt = `Scroll ${direction}`;
        return button;
    }

    function rotateItems(array, direction) {
        if (direction === 'left') {
            const first = array.shift();
            array.push(first);
        } else {
            const last = array.pop();
            array.unshift(last);
        }
        updateDisplay();
    }

    function updateDisplay() {
        menuContainer.innerHTML = '';
        menuContainer.appendChild(scrollLeft);
        menuItems.forEach(item => {
          menuContainer.appendChild(createMenuItem(item));
      });
      menuContainer.appendChild(scrollRight);
  }

  // Create main container
  const content = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  // Create scroll buttons
  const scrollLeft = createScrollButton('left');
  const scrollRight = createScrollButton('right');

  // Add event listeners
  scrollLeft.addEventListener('click', () => rotateItems(menuItems, 'left'));
  scrollRight.addEventListener('click', () => rotateItems(menuItems, 'right'));

  // Initial display
  updateDisplay();

  // Add to page
  content.innerHTML = '';
  content.appendChild(menuContainer);
}
 }