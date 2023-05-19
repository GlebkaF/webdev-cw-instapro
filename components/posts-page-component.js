import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";
import { getPosts } from "../api.js";
import { getToken } from "../index.js";

export function renderPostsPageComponent({ appEl, posts}) {
  getPosts({ token: getToken() }).then((data) => {
    const appPosts = data.posts.map((post) => {
      return {
        id: post.id,
        imagePost: post.imageUrl,
        date: post.createdAt,
        description: post.description,
        isLiked: post.isLiked,
        likes: post.likes,
        name: post.user.name,
        login: post.user.login,
        imageUrl: post.user.imageUrl,
      };
    });

    posts = appPosts;
    posts.forEach((post) => {
      appEl.insertAdjacentHTML(
        "beforeend",
        `<div class="page-container">
      <div class="header-container"></div>
      <ul class="posts">
        <li class="post">
          <div class="post-header" data-user-id="${post.id}">
            <img src="${post.imageUrl}" class="post-header__user-image">
            <p class="post-header__user-name">${post.name}</p>
          </div>
          <div class="post-image-container">
            <img class="post-image" src="${post.imagePost}">
          </div>
          <div class="post-likes">
            <button data-post-id="${post.id}" class="like-button">
            <img src="./assets/images/like-active.svg">
            </button>
            <p class="post-likes-text">
            Нравится: <strong>2</strong>
            </p>
          </div>
          <p class="post-text">
          <span class="user-name">${post.name}</span>
          ${post.description}
          </p>
          <p class="post-date">
          ${post.date}
          </p>
        </li>
       `
      );
    });
  });

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

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
}
