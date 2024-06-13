interface User {
  name: string;
  familiya: string;
  yosh: string;
}

const users: User[] = [];

const userForm = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const surNameInput = document.getElementById("surName") as HTMLInputElement;
const yoshInput = document.getElementById("age") as HTMLInputElement;
const cardContainer = document.getElementById(
  "cardContainer"
) as HTMLDivElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser: User = {
    name: nameInput.value,
    familiya: surNameInput.value,
    yosh: yoshInput.value,
  };
  users.push(newUser);
  nameInput.value = "";
  surNameInput.value = "";
  yoshInput.value = "";
  displayUsers();
});

function displayUsers() {
  cardContainer.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${user.name}</h2><h2>${user.familiya}</h2><h2>${user.yosh}</h2>
    `;
    cardContainer.appendChild(card);
  });
}
