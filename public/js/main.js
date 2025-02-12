// DEBUT DARKMODE 
let darkMode = document.querySelector("#darkMode");
let allInsideBody = document.body.querySelectorAll("*");
let allBody = document.querySelector("body");
function darkmodetoggle() {
    allBody.classList.toggle("bg-black");
    allBody.classList.toggle("text-white");
    document.querySelector(".logos").children[0].classList.toggle("text-white")
    document.querySelector(".logos").children[1].classList.toggle("text-white")
    console.log(darkMode.querySelector("i"));
    if(allBody.classList.contains("bg-black")) {
        darkMode.querySelector("i").className = "bi bi-brightness-low-fill"
    }
    else {
        darkMode.querySelector("i").className = "bi bi-moon-fill"
    }
    
     
}
darkMode.addEventListener("click", function() {
    darkmodetoggle()
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
// DEBUT BURGER 
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
// FIN BURGER
//carousel 
let testimonies = document.querySelector("#testimonials");
let leftButton = document.querySelector(".left-button");
let rigthButton = document.querySelector(".right-button");
let allCarouselsElems = testimonies.querySelectorAll(".card");
let carouselsElems = []
let current = 0
let direction = ""
allCarouselsElems.forEach(function(e) {
    console.log(e)
    carouselsElems.push(e.id)
})
console.log(allCarouselsElems)
console.log(carouselsElems)
function updateCarouselView(choice) {
    allCarouselsElems.forEach(function(e) {
        if(e.classList.contains("carousel-activated"))  {
            e.classList.replace("carousel-activated","carousel-not-activated") ; 
            }
            
            e.classList.remove("west");
            e.classList.remove("east"); 
        }) 
        allCarouselsElems[current].classList.replace("carousel-not-activated" , "carousel-activated"); 
        if(choice== "east") {
            allCarouselsElems[current].classList.add("east")
        }
        if(choice== "west") {
            allCarouselsElems[current].classList.add("west")
        }
}
leftButton.addEventListener("click",  function() {
    // animate("left")
    current -= 1 
    if(current < 0) {
        current = carouselsElems.length - 1
    }
    console.log(carouselsElems[current]);
    console.log(current) 
    updateCarouselView("west")
});
rigthButton.addEventListener("click", function(e) {
    current += 1
    if(current > 2) {
        current = 0
    }
    console.log(carouselsElems[current]);
    console.log(current)
    updateCarouselView("east")
});

setInterval(function() {
    current += 1
    if(current > 2) {
        current = 0
    }
    updateCarouselView("east")
}, 10000)