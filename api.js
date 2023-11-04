import { user } from "./index.js";

export const personalKey = "sergei-stepanov";
 const postsHost = `https://wedev-api.sky.pro/api/v1/${personalKey}/instapro/`
 

// Получает из API список постов 
export function getPosts({ token }) {
  return fetch(postsHost, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }

      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

// Регистрация
export function registerUser({ login, password, name, imageUrl }) {
  return fetch(postsHost + "/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
      imageUrl,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

// Авторизация
export function loginUser({ login, password }) {
  return fetch(postsHost + "/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

// Загружает картинку в облако, возвращает url загруженной картинки
export function uploadImage({ file }) {
  const data = new FormData();
  data.append("file", file);

  return fetch(postsHost + "/api/upload/image", {
    method: "POST",
    body: data,
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.fileUrl);
  });
}



function likeForButtons(){
  const likeButtons = document.querySelectorAll(".like-button")
  for(const likeButton of likeButtons){
    likeButton.addEventListener("click", () => {
      if(!user){
        alert("Войдите в систему")
      }
      let id = likeButton.dataset.id;
      if(user){
        addLike(id)
      }else{
        deleteLike(id)
      }
    })
  }
}
likeForButtons()
  
// Функция лайков
export function addLike(id) {
  
  return fetch(`${postsHost}/${id}/like`, {
    method: "POST",
    headers: {
      Authorization: token,
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });
}

//Убрать лайк
export function deleteLike(id) {
  return fetch(`${postsHost}/${id}/dislike`, {
    method: "POST",
    headers: {
      Authorization: token,
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });
}

export function addPost({ token, description, imageUrl}){
  return fetch(postsHost, {
    method: "POST",
    headers:{
      Authorization: token,
    },
    body: JSON.stringify({
      imageUrl,
      description, 
    })
  })
    .then((response) => {
      if(response.status === 400){
        throw new Error("Не хватает данных")
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      getPosts()
    })
    .catch((error) => {
      if(error.message === "Не хватает данных"){
        alert("Вы передали не все данные")
      } ;
    })
}