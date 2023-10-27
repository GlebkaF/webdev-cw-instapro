import { renderPostsPageComponent } from './components/posts-page-component'
import { posts } from './index.js'

export function saveUserToLocalStorage(user) {
    window.localStorage.setItem('user', JSON.stringify(user))
}

export function getUserFromLocalStorage() {
    try {
        return JSON.parse(window.localStorage.getItem('user'))
    } catch (error) {
        return null
    }
}

export function removeUserFromLocalStorage() {
    window.localStorage.removeItem('user')
}

// Функция для привязки обработчиков событий к кнопкам "лайк"
export function addLikeEventListeners() {
    const likeButtons = document.querySelectorAll('.like-button')

    likeButtons.forEach((likeButton, index) => {
        likeButton.addEventListener('click', () => {
            const post = posts[index]

            // Получение текущего значения isLiked
            const currentIsLiked = post.isLiked

            // Изменение значения isLiked
            post.isLiked = !currentIsLiked

            renderPostsPageComponent()
        })
    })
}
