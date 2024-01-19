export const fetchUsers = async (url) => {
  try {
    const raw = await fetch(url);
    const json = await raw.json();
    return json;
  } catch (error) {
    alert(`error: ${error}`);
  }
};
