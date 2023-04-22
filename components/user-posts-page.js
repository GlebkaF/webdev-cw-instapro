import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { userPosts, goToPage, getToken } from "../index.js";

import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export function renderUserPosts({ appEl }) {
  // TODO: реализовать рендер постов из api

  console.log("Актуальный список постов юзера:", userPosts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const bodyPostsUser = userPosts // Все посты юзера без Фото и имени (чтобы они не дублировались)
    .map(
      (data, index) =>
        `
        <div class="page-container">
        <div class="header-container"></div>
      <div class="posts-user-header">
        <!-- эту часть вынесли, чтобы аватарка с именем не дублировалась много раз -->
      </div>
      
      <div>
      <ul class="posts">
      <!-- Список рендерится из JS -->
      <li class="post">   
      <div class="post-image-container">
      <img class="post-image" src="${data.imageUrl}">
      </div>
      <div class="post-likes">
      <button data-post-id="${data.id}" class="like-button">
      ${
        data.isLiked
          ? '<img src="./assets/images/like-active.svg">'
          : '<img src="./assets/images/like-not-active.svg">'
      }
      </button>
      <p class="post-likes-text">
        ${data.likes.length}
      </p>
      </div>
      
      <p class="post-text">
      <span class="user-name">${data.user.name}</span>
      ${data.description}
      </p>
      <p class="post-date">
      ${formatDistanceToNow(new Date(data.createdAt), {
        locale: ru, // перевод даты на ру
        addSuffix: true, // добавляет надпись "назад"
      })}
      </p>
      </li>
      <li class="post">
           </ul>
      </div>
      </div> 
              `
    )
    .join("");

  const notRepeatAvatarAndNameUser = userPosts // (avatar and name: user)
    .map((data) => {
      return `
      <img src="${data.user.imageUrl}" class="posts-user-header__user-image">
      <p class="posts-user-header__user-name">${data.user.name}</p>`;
    })
    .pop(); // чтобы фото с именем не дублировалось применили метод

  const appHtml = `
     <div class="page-container">
     <div class="header-container"></div>
   <div class="posts-user-header">
     ${notRepeatAvatarAndNameUser}
   </div>
   ${bodyPostsUser}
   <div>
   <ul class="posts">
   <br>
   </div>
    `;

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

//
