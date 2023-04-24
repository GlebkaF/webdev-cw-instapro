import { posts, getToken, goToPage, USER_POSTS_PAGE } from "../index.js";
import { renderHeaderComponent } from "./header-component.js";
import {disLike, addLike, getPosts} from "../api.js";



function renderAllPostsUser({ appEl, userPosts, }) {
    appEl.innerHTML = `
    <div class="page-container">
        <div class="header-container"></div>
        <div class="posts-user-header" data-user-id="${userPosts[0].user.id}">
            <img src="${userPosts[0].user.imageUrl}" class="posts-user-header__user-image">
            <p class="posts-user-header__user-name">${userPosts[0].user.name}</p>
        </div>
        <ul id="post" class="posts"></ul>
    </div>
    `

    renderHeaderComponent({ element: document.querySelector(".header-container") });

    document.getElementById("post").innerHTML = userPosts.map((post, index) => `
    <li class="post">
                    <div class="post-image-container">
                      <img class="post-image" src="${post.imageUrl}">
                    </div>
                    <div class="post-likes">
                      <button data-index="${index}" data-post-id="${post.id}" class="like-button">
                        <img src="${posts[index].isLiked ? `./assets/images/like-active.svg` : `./assets/images/like-not-active.svg`}">
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
    `).join("");
    for (const likeEl of document.querySelectorAll(".like-button")) {
        likeEl.addEventListener("click", () => {
    if (posts[likeEl.dataset.index].isLiked){
      disLike({token: getToken(), id: likeEl.dataset.postId})
      .then(()=> {
        return getPosts({token: getToken()})
      })
      .then((newPosts) => {
        goToPage(USER_POSTS_PAGE, {
            userId:  document.querySelector(".posts-user-header").dataset.userId,
          }, newPosts);
      }) 
      console.log("1");
    }
    if (!posts[likeEl.dataset.index].isLiked){
      addLike({token: getToken(), id: likeEl.dataset.postId})
      .then(()=> {
        return getPosts({token: getToken()})
      })
      .then((newPosts) => {
        goToPage(USER_POSTS_PAGE, {
            userId:  document.querySelector(".posts-user-header").dataset.userId,
          }, newPosts);
      }) 
      console.log("2");
    }
        })
      }
}

export { renderAllPostsUser }