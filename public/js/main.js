// darkMode 
let darkMode = document.querySelector("#darkMode")
let allInsideBody = document.body.querySelectorAll("*");
let allBody = document.querySelector("body");
darkMode.addEventListener("click", function() {
    allBody.classList.toggle("bg-dark")
    allBody.classList.toggle("text-white")
    allInsideBody.forEach(function(e) {
        e.classList.toggle("bg-dark")
    })
})
