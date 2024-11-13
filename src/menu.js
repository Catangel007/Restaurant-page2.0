export const greeting2 = "if you don't look up you might miss it";

export function menuPage() {
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "MENU";
    menuHeader.setAttribute("id", "menu-header");

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

    function createMenuItem({ name, price, image, alt }) {
        const menuItem = document.createElement('div');
        menuItem.setAttribute("id","menu-item");

        menuItem.innerHTML = `
            <img src="${image}" alt="${alt}" id="menu-image">
            <h2 id="menu-name">${name}</h2>
            <p id="menu-price">${price}</p>
        `;
        return menuItem;
    }

    function createScrollRight() {
        const button = document.createElement("img");
        button.setAttribute ("id",`scroll-right`) ;
        button.src ="/Users/news/repos/Restaurant-page2.0/src/images/angle-square-right.svg"; 
        button.alt = `Scroll right`;
        button.height = "50px";
        button.width = "30px";
        return button;
    }

    function createScrollLeft() {
        const button = document.createElement("img");
        button.setAttribute ("id",`scroll-left`) ;
        button.src = "/Users/news/repos/Restaurant-page2.0/src/images/angle-square-left.svg";
        button.alt = `Scroll left`;
        button.height = "50px";
        button.width = "30px";
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

    // Create main container
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id","menu-container");

    // Create scroll buttons
    const scrollLeft = createScrollLeft();
    const scrollRight = createScrollRight();

    function updateDisplay() {
        menuContainer.innerHTML = '';
        menuContainer.appendChild(scrollLeft);
        menuItems.forEach(item => {
            menuContainer.appendChild(menuHeader);
            menuContainer.appendChild(createMenuItem(item));
        });
        menuContainer.appendChild(scrollRight);
    }
    updateDisplay();
    // Add event listeners
    scrollLeft.addEventListener('click', () => rotateItems(menuItems, 'left'));
    scrollRight.addEventListener('click', () => rotateItems(menuItems, 'right'));

    // Initial display setup
    content.innerHTML = "";
    
    content.appendChild(menuContainer);
    
    
}