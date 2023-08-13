import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, token, user } from "../index.js";
import { onDeletePost, toggleLike } from "../api.js";



export function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);
  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

 
  const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  
                </ul>
              </div>`;

  appEl.innerHTML = appHtml;

  const postEl = document.querySelector('.posts');
  const pathToLikeImg = './assets/images'

  posts.forEach((post, index) => {
    const listEl = document.createElement('li');
    listEl.classList.add('post');
    const userPost = `
      <div class="post-header" data-user-id="${post.user.id}">
        <img src="${post.user.imageUrl}" class="post-header__user-image">
        <p class="post-header__user-name">${post.user.name}</p>
      </div>
      <div class="post-image-container">
        <img class="post-image" src="${post.imageUrl}">
      </div>
      <div class="post-likes">
        <button id="like-button" data-post-id="${post.id}" data-index="${index}" class="like-button">
          <img src="${pathToLikeImg}/like-${post.likes.length ? 'active' : 'not-active'}.svg">
        </button>
        <p class="post-likes-text">
         Нравится: <strong>${post.likes.length}</strong>
        </p>
        ${user._id === post.user.id
          ? `<button class="button delete-button" style="margin-left: auto" id="delete-button" data-post-id="${post.id}" data-index="${index}">Удалить пост</button>`
          : ''}
      </div>
      <p class="post-text">
        <span class="user-name">${post.user.name}</span>
        ${post.description}
      </p>
      <p class="post-date">
        ${post.createdAt}
        19 минут назад
      </p>   
    `;

      listEl.innerHTML = userPost;
      postEl.appendChild(listEl);
  })

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("like-button")) {
      const index = event.target.dataset.index;
      const post = posts[index];

      toggleLike({ token, postId: post.id, isLiked: post.isLiked }).then((data) => {
        const likeButton = event.target;
        const likeImage = likeButton.querySelector("img");
        const likesCount = likeButton.nextElementSibling.querySelector("strong");

        likeImage.src = `${pathToLikeImg}/like-${data.isLiked ? 'active' : 'not-active'}.svg`;
        likesCount.textContent = data.likes.length;

        post.isLiked = data.isLiked;
        post.likes = data.likes;
      });
    }

    if (event.target.classList.contains("delete-button")) {
      const index = event.target.dataset.index;
      const postId = posts[index].id;

      onDeletePost({ token, id: postId }).then(() => {
        // сервер ответ 500
      })
    }
  });

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
