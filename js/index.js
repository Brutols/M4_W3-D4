import {createUser, spinner} from "./components.js";
import {fetchUsers} from "./fetch.js";
import {
  filterUsers,
  createQuerySelector,
  getItemFromLocalStorage,
  filteringUsers,
} from "./utility.js";

const URL = "https://jsonplaceholder.typicode.com/users";

const container = createQuerySelector(".card_container");
const searchBtn = createQuerySelector("#btn-submit_01");

const dropdownPlaceholder = getItemFromLocalStorage("dropdownValue");
const textPlaceholder = getItemFromLocalStorage("textValue");

const dropdown = createQuerySelector("#inputGroupSelect01");
const textInput = createQuerySelector("#text-input_01");

dropdownPlaceholder ? (dropdown.value = dropdownPlaceholder) : "...";
textPlaceholder ? (textInput.value = textPlaceholder) : "";

spinner(container);
const spinnerEl = createQuerySelector(".spinner");

const showUsers = async () => {
  spinnerEl.classList.remove("d-none")
  try {
    const users = await fetchUsers(URL);
    users.forEach((user) => {
      createUser(
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
    spinnerEl.classList.add("d-none");
  } catch (error) {
    alert(`error: ${error}`);
  }
};

window.onload = showUsers;

const showFilteredUsers = async (ev) => {
  spinnerEl.classList.remove("d-none")
  ev.preventDefault();
  try {
    const userToFilter = await fetchUsers(URL);
    const userToShow = await filterUsers(userToFilter);
    container.innerHTML = "";
    userToShow.map((user) => {
      createUser(
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
    spinnerEl.classList.add("d-none")
  } catch (error) {
    alert(`error: ${error}`);
  }
};

searchBtn.onclick = showFilteredUsers;
