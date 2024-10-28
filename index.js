// Get existing elements
let boton = document.querySelector("#menu-btn")
let skill = document.querySelector("#link-skills")
let proyect = document.querySelector("#link-proyect")
let education = document.querySelector("#link-education")
let participation = document.querySelector("#link-participation")
let contact = document.querySelector("#link-contact")
let navLinks = document.querySelector("#navbar")

// Get form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const reasonInput = document.querySelector('#reason');
const submitButton = document.querySelector('#enviar');
const cancelButton = document.querySelector('#cancelar');


let array = [boton, skill, proyect, education, participation, contact];
for (const elemento of array) {
    elemento.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    })
}

// Form shake animation function
const shakeForm = () => {
    form.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(50px)" },
            { transform: "translateX(-50px)" },
            { transform: "translateX(0)" }
        ],
        {
            duration: 400,
            easing: "linear",
        }
    );
};

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    if (!emailInput.value || !reasonInput.value) {
        shakeForm();
        return;
    }
    

    console.log('Form submitted:', {
        email: emailInput.value,
        reason: reasonInput.value
    });
    
    // Clear form
    emailInput.value = '';
    reasonInput.value = '';
});

// Cancel button handler
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    emailInput.value = '';
    reasonInput.value = '';
    shakeForm();
});