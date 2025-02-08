// darkMode 
let darkMode = document.querySelector("#darkMode");
let allInsideBody = document.body.querySelectorAll("*");
let allBody = document.querySelector("body");
function darkmodetoggle() {
    allBody.classList.toggle("bg-dark");
    allBody.classList.toggle("text-white");
    allInsideBody.forEach(function(e) {
        if(!e.classList("bg-primary")) {
        e.classList.toggle("bg-dark");
        }
    })
}
darkMode.addEventListener("click", darkmodetoggle);

// modal 
let loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click" ,function() {alert("open modal")})
//carousel 

// burgerMenu 
let burgerMenu = document.querySelector("#bourgir");
let burgeredPart = document.querySelector("#burgeredPart");
burgerMenu.addEventListener("click", function() {
    burgeredPart.classList.toggle("burger-content")
})
setInterval(function() {
    if(window.innerWidth < 850) {
        burgerMenu.classList.remove("burger-content")
    }
}, 200  )