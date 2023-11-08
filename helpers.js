
// функция ложит в ЛС ключ user и строку user в котрой у нас данные этого user(логин токен итд)
export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user)); 
}


// Функция пытается достать ключ user из ЛС.Если true - мы зарегистрированны если false - нет
export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
 
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}
