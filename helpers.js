function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

function getUserFromLocalStorage() {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

function removeUserFromLocalStorage() {
  window.localStorage.removeItem("user");
}

function safeHtmlString(str) {
  str = str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  return str;
}

export { saveUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, safeHtmlString }