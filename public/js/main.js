// DEBUT DARKMODE 
let darkMode = document.querySelector("#darkMode");
let allInsideBody = document.body.querySelectorAll("*");
let allBody = document.querySelector("body");
function darkmodetoggle() {
    allBody.classList.toggle("bg-dark");
    allBody.classList.toggle("text-white");
    document.querySelector(".logos").children[0].classList.toggle("text-white")
    document.querySelector(".logos").children[1].classList.toggle("text-white")
    console.log(darkMode.querySelector("i"));
    if(allBody.classList.contains("bg-dark")) {
        darkMode.querySelector("i").className = "bi bi-brightness-low-fill"
    }
    else {
        darkMode.querySelector("i").className = "bi bi-moon-fill"
    }
    allInsideBody.forEach(function(e) {
        if(!e.classList("bg-primary")) {
            e.classList.toggle("bg-dark");
        }
    })
    
     
}
darkMode.addEventListener("click", function() {
    
});
// FIN DARKMODE
// DEBUT MODAL
let modalArea = document.querySelector("#Modals")
let loginButton = document.querySelector("#loginButton");
let loginModal = document.querySelector("#Login")
loginButton.addEventListener("click" ,function() {
    loginModal.classList.add("show-modal")
})
let registerOption = document.querySelectorAll(".registerOption")
let registerModal = document.querySelector("#Register")
registerOption.forEach(function(e) {
    e.addEventListener("click", function() {
        if(loginModal.classList.contains("show-modal")) {
            loginModal.classList.remove("show-modal");
            registerModal.classList.add("show-modal"); 
        }
        else if(registerModal.classList.contains("show-modal")) {
            loginModal.classList.add("show-modal");
            registerModal.classList.remove("show-modal");  
        }
    })
})
let modalCloseButton = document.querySelectorAll(".modalCloseButton") 
modalCloseButton.forEach(function(e) {
    e.addEventListener("click", function() {
        console.log(e); 
        console.log(e.parentNode.parentNode.id)
        e.parentNode.parentNode.classList.remove("show-modal")
    })
})
// FIN MODAL
// burgerMenu 
let burgerMenu = document.querySelector("#bourgir");
let burgeredPart = document.querySelector("#burgeredPart");
burgerMenu.addEventListener("click", function() {
    burgeredPart.classList.toggle("burger-content")
})
setInterval(function() {
    if(window.innerWidth > 850) {
        burgeredPart.classList.remove("burger-content")
    }
}, 200  )
//carousel 
