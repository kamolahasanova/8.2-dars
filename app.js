var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputSurName = document.querySelector("#surName");
var btn = document.querySelector("button");
var ism = document.querySelector("#ism");
var yosh = document.querySelector("#yosh");
var familiya = document.querySelector("#familiya");
btn.addEventListener("click", function () {
    ism.textContent = inputName.value;
    yosh.textContent = inputAge.value;
    familiya.textContent = inputSurName.value;
});
