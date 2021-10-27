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

// ------------------- Валидация имени и email в блоке contacts-------//

const contactsNameAttention = document.querySelector(".contacts__name-attention"),
    contactsForm = document.querySelector(".contacts__form"),
    inputContacts = contactsForm.querySelectorAll("input"),
    contactsName = document.querySelector(".contacts__name"),
    contactsEmailAttention = document.querySelector(".contacts__email-attention"),
    contactsEmail = document.querySelector(".ontacts__email-attention"),
    regularUser = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/,
    regularEmail = /^[^@]+@[^@.]+\.[^@]+$/;

let validateName,
    validateEmail,
    validateInputValue;

console.log(inputContacts);

inputContacts.forEach(input => {
    if (!input.classList.contains("contacts__btn")) {
        if (input.value == "") {
            input.addEventListener('blur', () => {
                validateInput(input);
                console.log(input);
            });
        }
    }
});

const validateInput = (input) => {
    if (input.name == "name") {
        if (!regularUser.test(input.value) && input.value != '') {
            contactsNameAttention.style.cssText = "display: block";
            validateName = false;
        } else {
            contactsNameAttention.style.cssText = "display: none";
            validateName = true;
        }
    }

    if (input.name == "email") {
        if (!regularEmail.test(input.value) && input.value != '') {
            contactsEmailAttention.style.cssText = "display: block";
            validateEmail = false;
        } else {
            contactsEmailAttention.style.cssText = "display: none";
            validateEmail = true;
        }
    }
}


contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    inputContacts.forEach((input) => {
        if (!input.classList.contains("contacts__btn")) {
            if (input.value == "") {
                contactsNameAttention.style.cssText = "display: block";
                validateInputValue = false;
            } else {
                contactsNameAttention.style.cssText = "display: none";
                validateInputValue = true;
            }
        }
    });

    if (validateName &&
        validateEmail &&
        validateInputValue) {
        function dataSend() {
            alert("Данные отправлены");
        }
        dataSend();
        contactsForm.reset();
    }
});