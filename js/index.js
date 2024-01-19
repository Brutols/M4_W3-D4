import * as components from "./components.js";
import * as fetch from "./fetch.js";
import * as utility from "./utility.js";

const url = "https://jsonplaceholder.typicode.com/users";

const container = document.querySelector(".card_container");
const searchBtn = document.querySelector("#btn-submit_01");

const showUsers = async () => {
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
  } catch (error) {
    alert(`error: ${error}`);
  }
};

window.onload = showUsers;

const showFilteredUsers = async (ev) => {
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
  } catch (error) {
    alert(`error: ${error}`);
  }
};

searchBtn.onclick = showFilteredUsers;
