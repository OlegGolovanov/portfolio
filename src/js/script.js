"use strict";

const hamburgerLine = document.querySelectorAll(".hamburger__line");

document.addEventListener("click", (e) => {
    function activeHamburger(selector) {
        if (e.target && e.target.matches(selector)) {
            hamburgerLine.forEach(item => {
                item.classList.add("hamburger__line_active");
            });
            document.querySelector(".menu").classList.add("menu__active");

        }
    }
    activeHamburger(".hamburger");
    activeHamburger(".hamburger__line");

    if (!e.target.matches(".hamburger") 
    && !e.target.matches(".hamburger__line")) {
        hamburgerLine.forEach(item => {
            item.classList.remove("hamburger__line_active");
        });
        document.querySelector(".menu").classList.remove("menu__active");


    }
});