const baseHost = "https://webdev-hw-api.vercel.app";

function getPosts({ token }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) throw new Error("Нет авторизации");
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

function registerUser({ login, password, name, imageUrl }) {
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

function loginUser({ login, password }) {
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

function uploadImage({ file }) {
  const data = new FormData();
  data.append("file", file);

  return fetch(baseHost + "/api/upload/image", {
    method: "POST",
    body: data,
  }).then((response) => {
    return response.json();
  });
}

function uploadPost({ token, description, imageUrl }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro", {
    method: "POST",
    body: JSON.stringify({
      description,
      imageUrl,
    }),
    headers: {
      Authorization: token,
    },
  })
}

function allPostsUser({ id }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro/user-posts/" + id.userId, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

function addLike({ token, id }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro/" + id + "/like", {
    method: "POST",
    headers: {
      Authorization: token,
    },
  })
}

function disLike({ token, id }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro/" + id + "/dislike", {
    method: "POST",
    headers: {
      Authorization: token,
    },
  })
}

function deletePost({ token, id }) {
  return fetch(baseHost + "/api/v1/faust23259/instapro/" + id, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
}

export { getPosts, registerUser, loginUser, uploadImage, uploadPost, allPostsUser, addLike, disLike, deletePost }
