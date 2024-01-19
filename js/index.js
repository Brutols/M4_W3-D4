import * as components from "./components.js";
import * as fetch from "./fetch.js";
import * as utility from "./utility.js";

const url = "https://jsonplaceholder.typicode.com/users";

const container = document.querySelector(".card_container");
const searchBtn = document.querySelector("#btn-submit_01");

const dropdownPlaceholder = localStorage.getItem("dropdownValue");
const textPlaceholder = localStorage.getItem("textValue");

const dropdown = document.querySelector("#inputGroupSelect01");
const textInput = document.querySelector("#text-input_01");

dropdownPlaceholder ? (dropdown.value = dropdownPlaceholder) : "...";
textPlaceholder ? (textInput.value = textPlaceholder) : "";

const showUsers = async () => {
  components.spinner(container);
  try {
    const users = await fetch.fetchUsers(url);
    users.forEach((user) => {
      components.createUser(
        user.username,
        user.name,
        user.phone,
        user.email,
        user["address"].city,
        user["address"].street,
        user["address"].zipcode,
        container
      );
    });
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("d-none");
  } catch (error) {
    alert(`error: ${error}`);
  }
};

window.onload = showUsers;

const showFilteredUsers = async (ev) => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.remove("d-none");
  ev.preventDefault();
  try {
    const userToFilter = await fetch.fetchUsers(url);
    const userToShow = await utility.filterUsers(userToFilter);
    container.innerHTML = "";
    userToShow.map((user) => {
      components.createUser(
        user.username,
        user.name,
        user.phone,
        user.email,
        user["address"].city,
        user["address"].street,
        user["address"].zipcode,
        container
      );
    });
    spinner.classList.add("d-none");
  } catch (error) {
    alert(`error: ${error}`);
  }
};

searchBtn.onclick = showFilteredUsers;
