"use strict";

const hamburgerLine = document.querySelectorAll(".hamburger__line"),
    promo = document.querySelector(".promo"),
    hamburger = document.querySelector(".hamburger"),
    container = document.querySelector(".container"),
    input = document.querySelectorAll(".input"),
    scale = document.querySelectorAll(".work__scale"),
    form = document.querySelectorAll(".work__level");





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


// ------------------- Уровень навыков-------------------//

input.forEach(item => {
    item.value = "100";
    scale.forEach(i => {
        i.style.width = `${item.value}%`;
        form.forEach(l => {
            l.addEventListener("submit", (e) => {
                e.preventDefault();
                i.style.width = `${item.value}%`;
                console.log(item.value);
            });
        });
    });

});