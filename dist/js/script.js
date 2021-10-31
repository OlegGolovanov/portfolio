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
    contactsEmailAttention = document.querySelector(".contacts__email-attention"),
    contactsForm = document.querySelector(".contacts__form"),
    inputContacts = contactsForm.querySelectorAll("input"),
    contactsName = document.querySelector("#contacts__name"),
    contactsText = document.querySelector("#contacts__text"),
    contactsEmail = document.querySelector("#contacts__email"),
    regularUser = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/,
    regularEmail = /^[^@]+@[^@.]+\.[^@]+$/,
    regularProbel = /^\s*$/;

let validateName,
    validateEmail,
    validateText,
    validateInputValue;





inputContacts.forEach(input => {
    if (!input.matches("#contacts__btn") &&
        !input.matches(".contacts__checkbox")) {
        if (input.value == "") {
            input.addEventListener('blur', () => {
                validateInput(input);
            });
        }
    }
});

const validateInput = (input) => {

    if (input.name == "name") {
        if (!regularUser.test(input.value) && input.value != '') {
            contactsName.nextElementSibling.textContent = "Не корректное ФИО";
            validateName = false;
        } else {
            contactsName.nextElementSibling.textContent = "";
            validateName = true;
        }

        if (input.value.length == 0) {
            contactsName.nextElementSibling.textContent = "Поле не заполнено";
            validateName = false;
        } else {
            validateName = true;
        }
    }

    if (input.name == "email") {
        if (!regularEmail.test(input.value) && input.value != '') {
            contactsEmail.nextElementSibling.textContent = "Не корректный email";
            validateEmail = false;
        } else {
            contactsEmail.nextElementSibling.textContent = "";
            validateEmail = true;
        }

        if (input.value.length == 0) {
            contactsEmail.nextElementSibling.textContent = "Поле не заполнено";
            validateEmail = false;
        } else {
            validateEmail = true;
        }
    }

    if (input.name == "text") {
        if (input.value == "") {
            contactsText.nextElementSibling.textContent = "Поле не заполнено";
            validateText = false;
        } else {
            contactsText.nextElementSibling.textContent = "";
            validateText = true;
        }
    }
}


contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    function fillingInput(selector, validate) {
        if (selector.value == "") {
            selector.nextElementSibling.textContent = "Поле не заполнено";
            validate = false;
        } else {
            selector.nextElementSibling.textContent = "";
            validate = true;
        }
        console.log(validate)
    }
    fillingInput(contactsName, validateName);
    fillingInput(contactsEmail, validateEmail);
    fillingInput(contactsText, validateText);

    if (validateName &&
        validateEmail &&
        validateText) {
        if (contactsForm.querySelector(".contacts__checkbox").checked) {
            function dataSend() {
                alert("Данные отправлены");
            }
            dataSend();
            contactsForm.reset();
        } else {
            alert("Согласитесь с условиями");
        }
    }

});