// Data To Map
const menus =[
    {   id: 1,
        tittle:"Salad",
        price:"4.99",
        img: "./assets/menu4.jpg"
    },
    {   id: 2,
        tittle:"Soup",
        price:"4.99",
        img: "./assets/menu5.jpg"
    },
    {   id: 3,
        tittle:"Pasta",
        price:"4.99",
        img: "./assets/menu3.jpg"
    },
    {   id: 4,
        tittle:"Speical Salad",
        price:"4.99", 
        img: "./assets/menu6.jpg"
    },
    {   id: 5,
        tittle:"Special Soup",
        price:"4.99", 
        img: "./assets/menu2.jpg"
    },
    {   id: 6,
        tittle:"Special Diet",
        price:"4.99", 
        img: "./assets/menu1.jpg"
    },
]
const recipes =[
    {   id: 1,
        tittle:"Salad",
        img: "./assets/menu4.jpg"
    },
    {   id: 2,
        tittle:"Soup",
        img: "./assets/menu5.jpg"
    },
    {   id: 3,
        tittle:"Pasta",
        img: "./assets/menu3.jpg"
    },
    {   id: 4,
        tittle:"Speical Salad",
        img: "./assets/menu6.jpg"
    },
    {   id: 5,
        tittle:"Special Soup",
        img: "./assets/menu2.jpg"
    },
    {   id: 6,
        tittle:"Special Diet",
        img: "./assets/menu1.jpg"
    },
]


//Selectors
const menuContainer = document.querySelector(".container")
const recipesContainer = document.querySelector(".recipesContainer")

// EventListeners
window.addEventListener('scroll', stickyNav)

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menus)
    diplayRecipes(recipes)
})

// Functions

// making header sticky
function stickyNav(){
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY >100)
}

// dispalying menu dynamically
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
       return  `<div class="box">
                    <div class="imgBx">
                        <img src="${item.img}" alt="menu">
                    </div>
                    <div class="text">
                        <h3>${item.tittle}</h3>
                        <h4>$<span>${item.price}</span></h4>
                    </div>
                 </div>`})
    displayMenu = displayMenu.join(" ")
    menuContainer.innerHTML = displayMenu
}

// dispalying recipes cards

function diplayRecipes(recipeItems){
    let recipeItem = recipeItems.map(function(recp){
       return  `<div class="box">
                    <div class="imgBx">
                        <img src="${recp.img}" alt="menu">
                    </div>
                    <div class="text">
                        <h3>${recp.tittle}</h3>
                        <button class="btn">View</button>
                    </div>
                 </div>`})
    recipeItem = recipeItem.join(" ")
    recipesContainer.innerHTML = recipeItem
}

// Toggle Menu

function handleToggle(){
    const menuToggle = document.querySelector(".menuToggle")
    const nav = document.querySelector(".nav")
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
    console.log('i am active')
}