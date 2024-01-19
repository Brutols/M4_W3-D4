export const createQuerySelector = (input) => {
  return document.querySelector(input);
};

export const getItemFromLocalStorage = (item) => {
  return localStorage.getItem(item);
};

export const filteringUsers = (userArray, input1, input2) => {
  const filteredArr = userArray.filter((user) => {
    return user[input1].toLowerCase().includes(input2.toLowerCase());
  });
  return filteredArr;
}

export const filterUsers = async (array) => {
  try {
    const dropdownValue = createQuerySelector("#inputGroupSelect01").value;
    const textValue = createQuerySelector("#text-input_01").value;
    localStorage.setItem("dropdownValue", dropdownValue);
    localStorage.setItem("textValue", textValue);
    const filteredUsers = filteringUsers(array, dropdownValue, textValue);
    return filteredUsers;
  } catch (error) {
    alert(`error: ${error}`);
  }
}
