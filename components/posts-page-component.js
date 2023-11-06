import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../main.js";
import { getPosts } from "../api.js";
import { formatDistanceToNow } from "date-fns";

export function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api

  console.log("Актуальный список постов:", posts);

  const postsHtml = posts
    .map((element) => {
      const dateFormated = formatDistanceToNow(new Date(element.createdAt));

      return `<li class="post">
    <div class="post-header" data-user-id="${element.user.id}">
        <img src="${element.user.imageUrl}" class="post-header__user-image">
        <p class="post-header__user-name">${element.user.name}</p>
    </div>
    <div class="post-image-container">
      <img class="post-image" src="${element.imageUrl}">
    </div>
    <div class="btn-container">
    <div class="post-likes">
      <button data-id="${element.id}" class="like-button">
        <img src="./assets/images/like-active.svg"></button>
      <p class="post-likes-text">
        Нравится: <strong>${element.likes.length}</strong>
      </p>
    </div>
    <div class="btn-block">
      <button data-id="${element.id}" class="delete-button">Удалить пост</button>
      </div>
    </div>
    <p class="post-text">
      <span class="user-name">${element.user.name}</span>
      ${element.description}
    </p>
    <p class="post-date">
      ${dateFormated} 
    </p>
  </li>`;
    })
    .join("");

  const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">${postsHtml}</ul>
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
}
