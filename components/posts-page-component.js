// Главная страница с комментариями

import { POSTS_PAGE, USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";
import { likeActivation, disLikeActivation } from "../api.js";
import { formatDistance } from "date-fns";
import { eoLocale } from "date-fns/locale/eo";
import { ru } from "date-fns/locale";

export function renderPostsPageComponent({ appEl, token }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const appHtml = posts
    .map((post) => {
      return `
      
      <div class="page-container">
      <div class="header-container"></div>
        <ul class="posts">
          <li class="post">
            <div class="post-header post-header__animation" data-user-id="${
              post.user.id
            }">
                <img src="${
                  post.user.imageUrl
                }" class="post-header__user-image">
                <p class="post-header__user-name">${post.user.name}</p>
            </div>
            <div class="post-image-container">
              <img class="post-image" src="${post.imageUrl}">
            </div>
            <div class="post-likes">
              <button data-post-id="${post.id}" data-is-Liked="${post.isLiked}" 
              class="like-button">
              
              ${
                !post.isLiked
                  ? `<img src="./assets/images/like-not-active.svg">`
                  : `<img src="./assets/images/like-active.svg">`
              }
                
              </button>
              <p class="post-likes-text">
                Нравится: ${
                  post.likes.length < 2
                    ? `<strong>${
                        0 === post.likes.length
                          ? "0"
                          : post.likes.map(({ name: post }) => post).join(",")
                      }</strong>`
                    : `<strong>${
                        post.likes[
                          Math.floor(Math.random() * post.likes.length)
                        ].name
                      }</strong> и <strong>еще ${(
                        post.likes.length - 1
                      ).toString()}</strong>`
                }
              </p>
            </div>
            <p class="post-text">
              <span class="user-name">${post.user.name}</span>
              ${post.description}
            </p>
            <p class="post-date">
            
              ${formatDistance(new Date(), new Date(post.createdAt), {
                locale: ru,
              })} назад
            </p>
          </li>
        </ul>
      </div>`;
    })
    .join("");

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

  for (const likesButtons of document.querySelectorAll(".like-button")) {
    likesButtons.addEventListener("click", () => {
      let id = likesButtons.dataset.postId;
      console.log(id);

      if (likesButtons.dataset.isLiked === "false") {
        likeActivation({ token, id }).then(() => {
          console.log(token);
          console.log(id);
          goToPage(POSTS_PAGE);
        });
      }

      if (likesButtons.dataset.isLiked === "true") {
        disLikeActivation({ token, id }).then(() => {
          goToPage(POSTS_PAGE);
        });
      }
    });
  }
}
