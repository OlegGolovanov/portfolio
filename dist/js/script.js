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
const form = document.querySelectorAll(".work__level"),
    input = document.querySelectorAll(".input"),
    scale = document.querySelectorAll(".work__scale");

input.forEach(function (item, i) {
    item.value = "85";
    scale[i].style.width = `${item.value}%`
});

form.forEach(function (item, i) {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target && e.target === item) {
            if (input[i].value > 100) {
                input[i].value = "100"
            }
            scale[i].style.width = `${input[i].value}%`;
        }
    });
});


const body = document.body;

// Определение, заходит ли с мобильного устройства
// если заходим с декстопа, то тэгу body присваивается класс mouse
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    document.body.classList.remove("mouse");
    document.body.classList.add("mobile");
    // scale.forEach(item => {

    // })

} else {
    // код для обычных устройств
    document.body.classList.add("mouse");
    document.body.classList.remove("mobile");
}

const dropDown = document.querySelector(".drop-down"),
    topmenu = dropDown.querySelector(".topmenu"),
    a = dropDown.querySelectorAll("a"),
    submenu = dropDown.querySelectorAll(".submenu"),
    home = dropDown.querySelectorAll(".home");

a.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

// Событие на оболочку меню
dropDown.addEventListener("click", (e) => {
    // Перебираем элементы меню, на которые будем кликать, 
    // чтобы их порядковый номер присвоить к содержемуся
    // в нем подменю
    home.forEach((item, i) => {
        // Вешаем событие на каждый элемент меню     
        if (e.target && e.target === item) {
            // Скрываем все подменю
            submenu.forEach((item) => {
                item.style.cssText = "transform: scaleY(0)";
            })
            // Показываем только то подменю, которого индекс совпадает
            // с его родителем - элементом меню
            submenu[i].style.cssText = "transform: scaleY(1)";
        }
    })
    // Скрываем элементы подменю при нажатии на любое свободное пространство
    if (e.target.matches(".drop-down") || e.target.matches(".topmenu")) {
        submenu.forEach((item) => {
            item.style.cssText = "transform: scaleY(0)";
        })
    }
})