const personalKey = "igor-yurin";
const baseHost = "https://wedev-api.sky.pro";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;
const postsSpecificUser = `${baseHost}/api/v1/${personalKey}/instapro/user-posts/`;
// Гет запрос на данные о пользователях
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

// Гет запрос на данные о конкретном пользователе
export function getPostsSpecificUser({ token, id }) {
  return fetch(postsSpecificUser + `${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

// Отправка POST данных на API для активации лайка
export function likeActivation({ token, id }) {
  return fetch(postsHost + `/${id}/like`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      isLiked: true,
    }),
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
}

// Отправка POST данных на API для дизлайка
export function disLikeActivation({ token, id }) {
  return fetch(postsHost + `/${id}/dislike`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      isLiked: false,
    }),
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
}

// Отправка POST данных на API при добавлении нового коммента
export function postSending({ description, imageUrl, token }) {
  return fetch(postsHost, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      description,
      imageUrl,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Регистрация пользователя
// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F
export function registerUser({ login, password, name, imageUrl }) {
  return fetch(baseHost + "/api/user", {
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

// Авторизация пользователя
export function loginUser({ login, password }) {
  return fetch(baseHost + "/api/user/login", {
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
