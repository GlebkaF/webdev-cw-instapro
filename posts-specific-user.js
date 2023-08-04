// Страница сообщений пользователей

import { posts, goToPage } from "./index.js";
import { renderHeaderComponent } from "./components/header-component.js";
import { USER_POSTS_PAGE } from "./routes.js";
import { likeActivation, disLikeActivation } from "./api.js";
import { formatDistance } from 'date-fns';
import { eoLocale } from 'date-fns/locale/eo';
import { ru } from "date-fns/locale";


export function renderPostsSpecificUser({ appEl, token }) {
  console.log("Актуальный список постов:", posts);
  const postHtml = posts
    .map((post) => {
      return `
        <li class="post">
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
                     post.likes[Math.floor(Math.random() * post.likes.length)]
                       .name
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
         ${formatDistance(new Date(), new Date(post.createdAt), {locale: ru})} назад
        </p>
      </li>
        `;
    })
    .join("");

  const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="posts-user-header posts-user-header__specific ">
          <div class="post-header" data-user-id="${posts[0].user.id}">
            <img src="${posts[0].user.imageUrl}" class="post-header__user-image post-header__user-image-header-specific">
            <p class="post-header__user-name post-header__user-name-specific"><b>${posts[0].user.name}</b></p>
          </div>
        </div>
        <ul class="posts">
           ${postHtml}
        </ul>
      </div>`;

  appEl.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (const likesButtons of document.querySelectorAll(".like-button")) {
    likesButtons.addEventListener("click", () => {
      let id = likesButtons.dataset.postId;

      if (likesButtons.dataset.isLiked === "false") {
        likeActivation({ token, id }).then((responseData) => {
          goToPage(USER_POSTS_PAGE, {
            userId: responseData.post.user.id,
          });
        });
      }

      if (likesButtons.dataset.isLiked === "true") {
        disLikeActivation({ token, id }).then((responseData) => {
          goToPage(USER_POSTS_PAGE, {
            userId: responseData.post.user.id,
          });
        });
      }
    });
  }
}
