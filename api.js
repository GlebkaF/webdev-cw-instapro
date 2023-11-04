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
  }).then((response) => {
    return response.json();
  });
}


// Функция лайков
export function addLike(id) {
  return fetch(`${postsHost}/${id}/like`, {
    method: "POST",
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
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });
}

export function addPost({ token,imageUrl, description}){
  return fetch(postsHost, {
    method: "POST",
    headers:{
      Authorization: token,
      
    },
    body: JSON.stringify({
      imageUrl: "https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1683305583469-20220524_084001.jpg",
      description, 
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });
}