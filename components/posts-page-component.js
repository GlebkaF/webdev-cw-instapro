import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";

export function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api

  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
  const appHtml = posts.map((elementsOfdata, index) => 
  `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="${elementsOfdata.id}">
                        <img src="${elementsOfdata.user.imageUrl}" class="post-header__user-image">  <!-- тут меняем аватарку юзера -->
                        <p class="post-header__user-name">${elementsOfdata.user.name}</p>
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${elementsOfdata.imageUrl}">
                    </div>
                    <div class="post-likes">
                      <button data-post-id="${elementsOfdata.id}" class="like-button">
                        ${elementsOfdata.isLiked ? '<img src="./assets/images/like-active.svg">' : '<img src="./assets/images/like-not-active.svg">'}
                      </button>
                      <p class="post-likes-text">
                        Нравится: <strong>${elementsOfdata.likes.length}</strong>
                      </p>
                    </div>
                    <p class="post-text">
                      <span class="user-name">${elementsOfdata.user.name}</span>
                      ${elementsOfdata.description}
                    </p>
                    <p class="post-date">
                      19 минут назад <!-- придется подключать библ date-fns -->
                    </p>
                  </li>
                </ul>
              </div>`).join(''); 
            
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