let boton = document.querySelector("#menu-btn")
let skill = document.querySelector("#link-skills")
let proyect = document.querySelector("#link-proyect")
let education = document.querySelector("#link-education")
let participation = document.querySelector("#link-participation")
let contact = document.querySelector("#link-contact")
let navLinks = document.querySelector("#navbar")

let array = [boton, skill, proyect, education, participation, contact];

for (const elemento of array) {
    console.log(elemento)
    elemento.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    })
}