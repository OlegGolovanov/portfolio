"use strict";

const hamburgerLine = document.querySelectorAll(".hamburger__line"),
    promo = document.querySelector(".promo"),
    hamburger = document.querySelector(".hamburger"),
    container = document.querySelector(".container");

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

    if (e.target === promo || e.target === container || e.target.matches(".close")) {
        hamburgerLine.forEach(item => {
            item.classList.remove("hamburger__line_active");
        });
        document.querySelector(".menu").classList.remove("menu__active");
    }
});