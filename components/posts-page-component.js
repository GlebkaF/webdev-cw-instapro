import { POSTS_PAGE, USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { getToken, goToPage } from "../index.js";
import { addLike, removeLike } from "../api.js";

export function renderPostsPageComponent({ appEl, posts, forceUpdate }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const allPosts = posts
    .map((post) => {
      return `<li class="post">
    <div class="post-header" data-user-id="${post.user.id}">
        <img src="${post.user.imageUrl}" class="post-header__user-image">
        <p class="post-header__user-name">${post.user.name}</p>
    </div>
    <div class="post-image-container">
      <img class="post-image" src="${post.imageUrl}">
    </div>
    <div class="post-likes">
      <button data-post-id="${post.id}" data-isliked="${
        post.isLiked
      }" class="like-button">
        <img src="${
          post.isLiked
            ? "./assets/images/like-active.svg"
            : "./assets/images/like-not-active.svg"
        }">
      </button>
      <p class="post-likes-text">
        Нравится: <strong>${post.likes.length}</strong>
      </p>
    </div>
    <p class="post-text">
      <span class="user-name">${post.user.name}</span>
      ${post.description}
    </p>
    <p class="post-date">
      19 минут назад
    </p>
  </li>`;
    })
    .join("");

  const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                   ${allPosts}         
                </ul>
              </div>`;

  appEl.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (let userEl of document.querySelectorAll(".post-header")) {
    userEl.addEventListener("click", () => {
      goToPage(USER_POSTS_PAGE, {
        userId: userEl.dataset.userId,
      });
    });
  }

  for (let likeButtonEl of document.querySelectorAll(".like-button")) {
    likeButtonEl.addEventListener("click", () => {
      // получить данные стоит лайк или нет
      // можно через data атрибут likeButtonEl.dataset.isliked,
      let id = likeButtonEl.dataset.postId;
      let token = getToken();

      if (token === undefined) {
        alert("Вы не авторизированы");
      } else {
        likeButtonEl.dataset.isliked === "true"
          ? removeLike({ id, token }).then((responseData) => {
              posts = posts.map((post) =>
                post.id === responseData.post.id
                  ? { ...post, likes: responseData.post.likes, isLiked: false }
                  : post
              );
              likeButtonEl.innerHTML = `<img src="./assets/images/like-not-active.svg">`;
              renderPostsPageComponent({
                appEl,
                posts,
                forceUpdate: () => {
                  goToPage(POSTS_PAGE);
                },
              });
            })
          : addLike({ id, token }).then((responseData) => {
              posts = posts.map((post) =>
                post.id === responseData.post.id
                  ? { ...post, likes: responseData.post.likes, isLiked: true }
                  : post
              );
              likeButtonEl.innerHTML = `<img src="./assets/images/like-active.svg">`;
              renderPostsPageComponent({
                appEl,
                posts,
                forceUpdate: () => {
                  goToPage(POSTS_PAGE);
                },
              });
            });
      }
    });
  }
}