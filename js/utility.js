export const filterUsers = (array) => {
  const dropdownValue = document.querySelector("#inputGroupSelect01").value;
  const textValue = document.querySelector("#text-input_01").value;
  const filteredUsers = array.filter((user) => {
    if (user.hasOwnProperty(dropdownValue)) {
       return user[dropdownValue].toLowerCase().includes(textValue.toLowerCase());
    } else {
        return false
    }
  });
  return filteredUsers;
};