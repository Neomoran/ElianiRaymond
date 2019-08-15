//select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu"); //has menu branding & portrait
const menuNav = document.querySelector(".menu-nav"); // the ul list
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const about = document.querySelector("#about");

//setting the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }

  if (showMenu === true) {
    main.style.visibility = "hidden";
  } else {
    main.style.visibility = "visible";
  }
});

//Bringing in animationbar file with ajax
document.getElementById("button").addEventListener("click", newStuff);
function newStuff() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "animationbar.html", true);
  xhr.onload = function() {
    if (this.status == 200) {
      let skills = document.getElementById("skills");
      skills.innerHTML = this.response;
    }
  };
  xhr.send();
}
//Removing  the skills div on close
document.getElementById("button3").addEventListener("click", close);
function close() {
  document.getElementById("skills").innerHTML = "";
}
