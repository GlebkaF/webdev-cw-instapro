import { USER_POSTS_PAGE } from '../routes.js'
import { renderHeaderComponent } from './header-component.js'
import { goToPage } from '../index.js'
import { posts } from '../index.js'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

export function renderPostsPageComponent() {
    const appEl = document.getElementById('app')

    const getPosts = posts.map((post) => {
        return {
            postId: post.id,
            imageUrl: post.imageUrl,
            createdAt: formatDistanceToNow(new Date(post.createdAt), {
                locale: ru,
            }),
            description: post.description,
            userId: post.user.id,
            userName: post.user.name,
            userLogin: post.user.login,
            userImageUrl: post.user.imageUrl,
            likes: [{ id: post.user.id, name: post.user.name }],
            isLiked: post.isLiked,
        }
    })

    const appHtml = getPosts
        .map((post, index) => {
            return `<div class="page-container">
          <div class="header-container"></div>
          <ul class="posts">
            <li class="post">
              <div class="post-header" data-user-id="${post.userId}">
                <img src="${post.userImageUrl}" class="post-header-user-image">
                <p class="post-header-user-name">${post.userName}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}">
              </div>
              <div class="post-likes">
                <button data-index="${index}" data-post-id="${
                    post.postId
                }" class="like-button">
                  <img src="${
                      post.isLiked
                          ? './assets/images/like-active.svg'
                          : './assets/images/like-not-active.svg'
                  }">
                </button>
                <p class="post-likes-text">
                  Нравится: <strong>2</strong>
                </p>
              </div>
              <p class="post-text">
                <span class="user-name">${post.userName}</span>
                ${post.description}
              </p>
              <p class="post-date">
                ${post.createdAt} назад
              </p>
            </li>
          </ul>
        </div>`
        })
        .join('')

    appEl.innerHTML = appHtml

    renderHeaderComponent({
        element: document.querySelector('.header-container'),
    })

    for (let userEl of document.querySelectorAll('.post-header')) {
        userEl.addEventListener('click', () => {
            goToPage(USER_POSTS_PAGE, {
                userId: userEl.dataset.userId,
            })
        })
    }
}
