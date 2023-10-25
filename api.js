import { renderPostsPageComponent } from './components/posts-page-component.js'
import { setPosts } from './index.js'
import { format } from 'date-fns'

// Замени на свой, чтобы получить независимый от других набор данных.
// "боевая" версия инстапро лежит в ключе prod
const personalKey = 'christina-ermolenko'
const baseHost = 'https://webdev-hw-api.vercel.app'
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`

export function getPosts({ token }) {
    return fetch(postsHost, {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    })
        .then((response) => {
            if (response.status === 401) {
                throw new Error('Нет авторизации')
            }

            return response.json()
        })
        .then((responseData) => {
            const appPost = responseData.posts.map((post) => {
                const createDate = format(
                    new Date(post.date),
                    'dd.MM.yyyy hh:mm',
                )
                return {
                    id: post.id,
                    imageUrl: post.imageUrl,
                    createdAt: createDate,
                    description: post.description,
                    user: {
                        id: post.user.id,
                        name: post.user.name,
                        login: post.user.login,
                        imageUrl: post.user.imageUrl,
                    },
                    likes: [{ id: post.user.id, name: post.user.name }],
                    isLiked: post.isLiked,
                }
            })

            setPosts(appPost)
            renderPostsPageComponent()
        })
        .catch((error) => {
            alert('Кажется, у вас сломался интернет, попробуйте позже')

            //отправка в систему сбора ошибок
            console.warn(error)
        })
}

// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F
export function registerUser({ login, password, name, imageUrl }) {
    return fetch(baseHost + '/api/user', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
            name,
            imageUrl,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Такой пользователь уже существует')
        }
        return response.json()
    })
}

export function loginUser({ login, password }) {
    return fetch(baseHost + '/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Неверный логин или пароль')
        }
        return response.json()
    })
}

// Загружает картинку в облако, возвращает url загруженной картинки
export function uploadImage({ file }) {
    const data = new FormData()
    data.append('file', file)

    return fetch(baseHost + '/api/upload/image', {
        method: 'POST',
        body: data,
    }).then((response) => {
        return response.json()
    })
}
