import { USER_POSTS_PAGE, POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken } from "../index.js";
import { disLike, addLike } from "../api.js";

function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
  const appHtml = posts.map((post, index)=>`
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="${post.user.id}">
                        <img src="${post.user.imageUrl}" class="post-header__user-image">
                        <p class="post-header__user-name">${post.user.name}</p>
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${post.imageUrl}">
                    </div>
                    <div class="post-likes">
                      <button data-index="${index}" data-post-id="${post.id}" class="like-button">
                        <img src="${post.isLiked ? `./assets/images/like-active.svg` : `./assets/images/like-not-active.svg`}">
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
                     
                    </p>
                  </li>
                </ul>
              </div>`).join("");

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
  for (const likeEl of document.querySelectorAll(".like-button")) {
    likeEl.addEventListener("click", () => {
if (posts[likeEl.dataset.index].isLiked){
  disLike({token: getToken(), id: likeEl.dataset.postId})
  .then(() => {
    goToPage(POSTS_PAGE);
  }) 
  console.log("1");
}
if (!posts[likeEl.dataset.index].isLiked){
  addLike({token: getToken(), id: likeEl.dataset.postId})
  .then(() => {
    goToPage(POSTS_PAGE);
  }) 
  console.log("2");
}
    })
  }
}
export {renderPostsPageComponent};