// JavaScript Document
console.log("hi");

// ---- Variabele ---- //
var menuknop = document.querySelector("header button");
var sluitknop = document.querySelector("nav button");


// ---- Event Listeners ---- //
menuknop.addEventListener("click", openmenu);
sluitknop.addEventListener("click", sluitmenu);



// ---- audio hover effect
const molly = document.querySelector(".page1 section:nth-of-type(4) img");
const villagerAudio = [new Audio('./audio/villager1.mp3'), new Audio('./audio/villager2.mp3'), new Audio('./audio/villager3.mp3')]
molly.addEventListener("mouseover", VillagerSound)

function VillagerSound() {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomVillagerNoises = villagerAudio[randomNumber];
  randomVillagerNoises.play();
}


// ---- .page1 Animatie Observer ---- //
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   // If the element is visible
   if (entry.isIntersecting) {
    console.log(entry.target);
    entry.target.classList.add('FadeInR-animation');
    }
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add('FadeInL-animation');
      }
  });
});

// eerst inladen van andere plaatjes
window.onload = function(){
  observer1.observe(document.querySelector(".page1 section:nth-of-type(3)"));
  observer1.observe(document.querySelector(".page1 section:nth-of-type(3)"));
}

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   // If the element is visible
   if (entry.isIntersecting) {
    console.log(entry.target);
    entry.target.classList.add('SlideInB');
    }
   
  });
});
  observer2.observe(document.querySelector(".page1 section:nth-of-type(2)"));
  observer2.observe(document.querySelector(".page1 section:nth-of-type(4)"));

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     // If the element is visible
     if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add('SmallBig');
      }
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add('SmallBig2');
        }
        
    });
  });
   observer3.observe(document.querySelector(".page1 section:nth-of-type(3)"));
   observer3.observe(document.querySelector(".page1 section:nth-of-type(4)"));

   const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     // If the element is visible
        if (entry.isIntersecting) {
          console.log(entry.target);
          entry.target.classList.add('SmallBig3');
          }

          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add('SmallBig2');
            }
    });
  });

  observer4.observe(document.querySelector(".page1 section:nth-of-type(5)"));

  const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     // If the element is visible
     if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add('SmallBig3');
      }

      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add('FadeInLNOR');
        }
    });
  });

  observer5.observe(document.querySelector(".page1 section:nth-of-type(6)"));


// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/ //

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





  