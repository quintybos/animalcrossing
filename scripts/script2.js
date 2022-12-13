// JavaScript Document
console.log("hi");

// ---- variabele ---- //
var menuknop = document.querySelector("header button");
var sluitknop = document.querySelector("nav button");

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


// ---- Event Listeners ---- //
menuknop.addEventListener("click", openmenu);
sluitknop.addEventListener("click", sluitmenu);


// ---- audio hover effect
const knutsel = document.querySelector(".page2 section:nth-of-type(5) ul:nth-of-type(2) li:nth-of-type(4) img");
const villagerAudio = [new Audio('./audio/villager1.mp3'), new Audio('./audio/villager2.mp3'), new Audio('./audio/villager3.mp3')]
knutsel.addEventListener("mouseover", VillagerSound)

function VillagerSound() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomVillagerNoises = villagerAudio[randomNumber];
  randomVillagerNoises.play();
}

// ---- Hamburger Menu functie
function openmenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonmenu");
}

function sluitmenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonmenu");
}


// ---- Img carousel create ---- //
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
}); 

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// https://codepen.io/tutsplus/pen/XWZqGgX?editors=0010


// ---- .page2 Animatie Observer ---- //
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   // If the element is visible

          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add('SlideInB');
            }
  });
});
observer1.observe(document.querySelector(".page2 section:nth-of-type(2)"));
observer1.observe(document.querySelector(".page2 section:nth-of-type(3)"));
observer1.observe(document.querySelector(".page2 section:nth-of-type(4)"));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   // If the element is visible

          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add('FadeInLNOR');
            }

            if (entry.isIntersecting) {
              console.log(entry.target);
              entry.target.classList.add('FadeInRNOR');
              }
  });
});
observer2.observe(document.querySelector(".page2 section:nth-of-type(5)"));


// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/ //








  