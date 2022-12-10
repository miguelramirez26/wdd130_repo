const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5= document.getElementById("btn5");
const popUp = document.getElementById("pop-up");
const formTitle = document.getElementById("form-tilte");
const closeform = document.getElementById("close-form")
const contactUsForm = document.getElementById("contact-us-form")

btn1.addEventListener('click', () => {
    popUp.style.display = "block";
    formTitle.innerText = "General Contact";
})

btn2.addEventListener('click', () => {
    popUp.style.display = "block";
    formTitle.innerText = "Request Advice";
})

btn3.addEventListener('click', () => {
    popUp.style.display = "block";
    formTitle.innerText = "Request Installation";
})

btn4.addEventListener('click', () => {
    popUp.style.display = "block";
    formTitle.innerText = "Request Repair";
})

btn5.addEventListener('click', () => {
    popUp.style.display = "block";
    formTitle.innerText = "Make a request";
})


closeform.addEventListener('click', () => {
    popUp.style.display = "none";
})

contactUsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactUsForm.reset();
    popUp.style.display = "none";
})
