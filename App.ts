var inputName = document.querySelector("#name") as HTMLInputElement;
var inputAge = document.querySelector("#age") as HTMLInputElement;
var inputSurName = document.querySelector("#surName") as HTMLInputElement;
var btn = document.querySelector("button") as HTMLButtonElement;
var ism = document.querySelector("#ism");
var yosh = document.querySelector("#yosh");
var familiya = document.querySelector("#familiya");

btn.addEventListener("click", () => {
  ism.textContent = inputName.value;
  yosh.textContent = inputAge.value;
  familiya.textContent = inputSurName.value;
});
