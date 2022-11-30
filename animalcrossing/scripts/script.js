// JavaScript Document
console.log("hi");

// ---- variabele ---- //
var menuknop = document.querySelector("header button");
var sluitknop = document.querySelector("nav button");


// ---- Event Listeners ---- //
menuknop.addEventListener("click", openmenu);
sluitknop.addEventListener("click", sluitmenu);


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


  