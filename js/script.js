document.addEventListener("DOMContentLoaded", init);
var myTimer = setInterval(showNewSlide, 3000);
let myButton;

// user interaction preparation
function init() {
    
    // slideshow shortcut variables
    const container = document.querySelector(".container");
    const currentSlide = document.querySelector(".current");
    const frame = document.querySelector(".slideshow");
    const slides = document.querySelectorAll(".slide");

    // slideshow controls
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.innerHTML = 
    '<a href ="#" class="back-btn">Back</a><a href ="#" class="next-btn">Next</a>';
    // display controls on page
    container.appendChild(controls);

    const backBtn = controls.querySelector(".back-btn");
    const nextBtn = controls.querySelector(".next-btn");

    // control functionality
    backBtn.addEventListener("click", showNewSlide);
    nextBtn.addEventListener("click", showNewSlide);

    // slideshow setup
    slides.forEach((image) => {
        image.classList.add("hide");
    });
        slides[0].classList.remove("hide");
    
}


function showNewSlide(e) {
    // slideshow shortcut variables
    const container = document.querySelector(".container");
    const currentSlide = document.querySelector(".current");
    const frame = document.querySelector(".slideshow");
    const slides = document.querySelectorAll(".slide");
    let myButton;
    if (e){
        const myButton = e.target;
    } 
    let nextUp = "";

    // check to see what button was clicked
    
    if(!e || myButton && myButton.classList.contains("back-btn")){
        nextUp = currentSlide.previousElementSibling;
    } else {
        nextUp = currentSlide.nextElementSibling;
    }

    // back button 
    if(nextUp === null) {
        let index = slides.length - 1;
        nextUp = slides[index];
    } 

    // next button  
    if (nextUp.nodeName !== "IMG") {
        nextUp = slides[0];
    }

    if (currentSlide && nextUp) {
        // deccommision the currently visible slide
        currentSlide.classList.toggle("hide");
        currentSlide.classList.toggle("current");

        // show the next slide
        nextUp.classList.toggle("hide");
        nextUp.classList.toggle("current");

        // change captions to match slide
        const txt = currentSlide.previousElementSibling.alt;
        const caption = frame.querySelector("figcaption");
        caption.textContent = txt;
    }

    if (e){
        clearInterval(myTimer);
    } 
}
