import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, toggleUserLike, user, formatDate } from "../index.js";

export function renderUserPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
const postsHtml = posts.map((post) => {
	return `
	<li class="post">
	<div class="post-header" data-user-id="${post.user.id}">
		<img src="${post.user.imageUrl}" class="post-header__user-image">
		<p class="post-header__user-name">${post.user.name}</p>
	</div>

	<div class="post-image-container">
		<img class="post-image" src="${post.imageUrl}">
	</div>

	<div class="post-likes">
		<button data-post-id="${post.id}" class="like-button">
		${post.isLiked 
			? `<img src="./assets/images/like-active.svg"></img>`
			: `<img src="./assets/images/like-not-active.svg"></img>`
		}
		</button>
		<p class="post-likes-text">
		Нравится: 
		${
		post.likes.length < 2
			? 
			`<strong>${post.likes.length === 0 ? "0" : post.likes[0].name}</strong>`
			:
			`<strong>${post.likes[0].name} и ещё ${post.likes.length - 1}</strong>`
		}
		</p>
	</div>

	<p class="post-text">
		<span class="user-name">${post.user.name}</span>
		${post.description}
	</p>
	<p class="post-date">
		${formatDate(post.createdAt)}
	</p>
	</li>`
})
.join("");

const appHtml = `
	<div class="page-container">
		<div class="header-container"></div>
		<a href="#" class="scroll-top" title="Наверх"></a>
		${posts.length === 0 ? "К сожалению, посты отсутствуют :( Авторизуйтесь, чтобы добавить" : ""}
		<ul class="posts">
		${postsHtml}
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
    });
  }

for (let likeEl of document.querySelectorAll(".like-button")) {
	likeEl.addEventListener("click", () => {
		if (!user) {
			alert ('Лайкать посты могут только авторизованные пользователи');
			return;
		}
		toggleUserLike({ postId: likeEl.dataset.postId});
	});
}

let upButton = document.querySelector('.scroll-top')

function scrollToStart() {
	if (window.pageYOffset > 20) {
	upButton.style.opacity = '1'
	} else { upButton.style.opacity = '0' }
	}
upButton.onclick = function () {
	window.scrollTo(0,0)
}
window.onscroll = scrollToStart

}
