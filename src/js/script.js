"use strict";

const hamburgerLine = document.querySelectorAll(".hamburger__line"),
    promo = document.querySelector(".promo"),
    hamburger = document.querySelector(".hamburger"),
    container = document.querySelector(".container"),
    form = document.querySelectorAll(".work__level"),
    input = document.querySelectorAll(".input"),
    scale = document.querySelectorAll(".work__scale");



function show(selector) {
    document.querySelector(selector).classList.remove("hide");
    document.querySelector(selector).classList.add("show");
}

function hide(selector) {
    document.querySelector(selector).classList.remove("show");
    document.querySelector(selector).classList.add("hide");
}



document.addEventListener("click", (e) => {
    //----------------------------active menu------------------------------------//
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

    //----------------------------deactivation menu --------------------------//
    if (e.target.matches(".close") || e.target.matches(".menu__blackout")) {
        hamburgerLine.forEach(item => {
            item.classList.remove("hamburger__line_active");
        });
        document.querySelector(".menu").classList.remove("menu__active");
        hide(".menu__blackout");
    }
});

// --------------------------Уровень навыков---------------//
input.forEach(function (item, i) {
    item.value = "85";
    scale[i].style.width = `${item.value}%`
});

form.forEach(function (item, i) {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target && e.target === item) {
            if(input[i].value > 100) {
                input[i].value = "100"
            }
            scale[i].style.width = `${input[i].value}%`;
        }
    });
});