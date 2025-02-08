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
let burgerMenu = document.querySelector("#bourgir")
burgerMenu.addEventListener("click", function() {
    alert('burger menu displayed')
})