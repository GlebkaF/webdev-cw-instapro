import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";
import { getPosts } from "../api.js";
import { getToken, likeDislikeUser, user } from "../index.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
let singleUser = "";

export function renderPostsPageComponent({ appEl, posts }) {
  getPosts({ token: getToken() }).then((data) => {
    console.log(data.posts);
    const appPosts = data.posts.map((post) => {
      return {
        id: post.id,
        imagePost: post.imageUrl,
        createdAt: post.createdAt,
        description: post.description,
        isLiked: post.isLiked,
        likes: post.likes,
        name: post.user.name,
        login: post.user.login,
        imageUrl: post.user.imageUrl,
        userId: post.user.id,
      };
    });
    
    posts = appPosts;
    function renderLikes(likes) {
      if (likes.length === 0) {
        return 0;
      } else if (likes.length === 1) {
        return likes[0].name;
      } else {
        let reminingLikes = likes.length - 1;
        return (
          likes[0].name +
          " и еще " +
          reminingLikes +
          " " +
          (reminingLikes == 1 ? "пользователю" : "пользователям")
        );
      }
    }
    if (singleUser) {
      let result = posts.filter((post) => post.userId == singleUser);
      posts = result;
    }
    const tasksHtml = posts
      .map((post) => {
        return `<li class="post">
          <div class="post-header" data-user-id="${post.userId}">
            <img src="${post.imageUrl}" class="post-header__user-image">
            <p class="post-header__user-name">${post.name}</p>
          </div>
          <div class="post-image-container">
            <img class="post-image" src="${post.imagePost}">
          </div>
          <div class="post-likes">
            <button data-post-id="${post.id}" class="like-button">
            ${
              post.isLiked
                ? '<img src="./assets/images/like-active.svg">'
                : '<img src="./assets/images/like-not-active.svg"></img>'
            }
            
            </button>
            <p class="post-likes-text">
            Нравится: <strong>${renderLikes(post.likes)}</strong>
            </p>
          </div>
          <p class="post-text">
          <span class="user-name">${post.name} :</span>
          ${post.description}
          </p>
          <p class="post-date">
          ${formatDistanceToNow(new Date(post.createdAt), {
            locale: ru,
            addSuffix: "назад",
          })}
          </p>
        </li>
       `;
      })
      .join("");
    const appHtml = `<div class = "page-container">
<div class="header-container"></div>
<ul class="posts">
${tasksHtml}
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
        singleUser = userEl.dataset.userId;
      });
    }
    for (let likeEl of document.querySelectorAll(".like-button")) {
      likeEl.addEventListener("click", () => {
        if (!user) {
          alert("Чтобы лайкнуть пост, авторизуйтесь");
          return;
        }
        likeDislikeUser({ postId: likeEl.dataset.postId });
      });
    }
  });
  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
}
