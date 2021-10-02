"use strict";

const hamburgerLine = document.querySelectorAll(".hamburger__line"),
    promo = document.querySelector(".promo"),
    hamburger = document.querySelector(".hamburger"),
    container = document.querySelector(".container");

function show(selector) {
    document.querySelector(selector).classList.remove("hide");
    document.querySelector(selector).classList.add("show");
}

function hide(selector) {
    document.querySelector(selector).classList.remove("show");
    document.querySelector(selector).classList.add("hide");
}

document.addEventListener("click", (e) => {
    function activeHamburger(selector) {
        if (e.target && e.target.matches(selector)) {
            hamburgerLine.forEach(item => {
                item.classList.add("hamburger__line_active");
            });
            document.querySelector(".menu").classList.add("menu__active");
            show(".menu__blackout");
        }
    }
    activeHamburger(".hamburger");
    activeHamburger(".hamburger__line");


    if (e.target.matches(".close") || e.target.matches(".menu__blackout")) {
        hamburgerLine.forEach(item => {
            item.classList.remove("hamburger__line_active");
        });
        document.querySelector(".menu").classList.remove("menu__active");
        hide(".menu__blackout");
    }
});