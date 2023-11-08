import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { goToPage, user } from "./main.js";
import { POSTS_PAGE } from "./routes.js";



// URl //
const personalKey = "alex_potapov";
const baseHost = "https://webdev-hw-api.vercel.app";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

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
      return data.posts
    });
}

// Регистрация
export function registerUser({ login, password, name }) {
  return fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
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
  return fetch("https://wedev-api.sky.pro/api/user/login", {
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

  return fetch(baseHost + "/api/upload/image", {
    method: "POST",
    body: data,
  }).then((response) => {
    return response.json();
  });
}


// Добавить новый пост
export function addPost({ token, description, imageUrl }) {
  return fetch(postsHost, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      imageUrl,
      description,
    }),
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error("Не хватает данных");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      getPosts({ token });
    })
    .catch((error) => {
      if (error.message === "Не хватает данных") {
        alert("Вы передали не все данные");
      }
    });
}

// Функционал лайков

export const addLike = ({ token, postId }) => {
  return fetch(postsHost + '/' + postId + "/like", {
    method: "POST",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        alert('Лайкать посты могут только авторизованные пользователи');
        throw new Error("Нет авторизации");
      }

      return response.json();
    })
}

export const deleteLike = ({ token, postId }) => {
  return fetch(postsHost + '/' + postId + "/dislike", {
    method: "POST",
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
}
