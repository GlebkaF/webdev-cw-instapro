import { getPosts, postUsers } from "./api.js";
import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import {
  ADD_POSTS_PAGE,
  AUTH_PAGE,
  LOADING_PAGE,
  POSTS_PAGE,
  USER_POSTS_PAGE,
} from "./routes.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "./helpers.js";
import {renderAllPostsUser} from "./components/all-posts-user.js";

let user = getUserFromLocalStorage();
let page = null;
let posts = [];
let userPosts = [];

const getToken = () => {
  const token = user ? `Bearer ${user.token}` : undefined;
  console.log(token);
  return token;
};

const logout = () => {
  user = null;
  removeUserFromLocalStorage();
  goToPage(POSTS_PAGE);
};

/**
 * Включает страницу приложения
 */
const goToPage = (newPage, data, newPosts) => {
  if (
    [
      POSTS_PAGE,//страница постов
      AUTH_PAGE,//страница авторизации
      ADD_POSTS_PAGE,//страница добавления поста
      USER_POSTS_PAGE,//страница user постов
      LOADING_PAGE,//страница загрузи
    ].includes(newPage)
  ) {
    if (newPage === ADD_POSTS_PAGE) {
      // Если пользователь не авторизован, то отправляем его на авторизацию перед добавлением поста
      page = user ? ADD_POSTS_PAGE : AUTH_PAGE;
      return renderApp();
    }

    if (newPage === POSTS_PAGE) {
      page = LOADING_PAGE;
      renderApp();

      return getPosts({ token: getToken() })
        .then((newPosts) => {
          page = POSTS_PAGE;
          posts = newPosts;
          renderApp();
        })
        .catch((error) => {
          console.error(error);
          goToPage(POSTS_PAGE);
        });
    }

    if (newPage === USER_POSTS_PAGE) {
      // TODO: реализовать получение постов юзера из API
      //console.log("Открываю страницу пользователя: ", data.userId);
      page = USER_POSTS_PAGE;
      if (newPosts){
        posts = newPosts;
      }
      
      return renderApp(data);
    }

    page = newPage;
    renderApp();

    return;
  }

  throw new Error("страницы не существует");
};

const renderApp = (data) => {
  const appEl = document.getElementById("app");
  if (page === LOADING_PAGE) {
    return renderLoadingPageComponent({
      appEl,
      user,
      goToPage,
    });
  }

  if (page === AUTH_PAGE) {
    return renderAuthPageComponent({
      appEl,
      setUser: (newUser) => {
        user = newUser;
        saveUserToLocalStorage(user);
        goToPage(POSTS_PAGE);
      },
      user,
      goToPage,
    });
  }

  if (page === ADD_POSTS_PAGE) {
    return renderAddPostPageComponent({
      appEl,
      onAddPostClick({ description, imageUrl }) {
        // TODO: реализовать добавление поста в API
        console.log("Добавляю пост...", { description, imageUrl });
        goToPage(POSTS_PAGE);
      },
    });
  }

  if (page === POSTS_PAGE) {
    return renderPostsPageComponent({
      appEl,
    });
  }

  if (page === USER_POSTS_PAGE) {
    // TODO: реализовать страницу фотографию пользвателя
    //appEl.innerHTML = "Здесь будет страница фотографий пользователя";
    return postUsers({id: data})
    .then((allPostUser)=> {
      userPosts = allPostUser;
      return renderAllPostsUser({ appEl, userPosts, });
    })
  }
};

goToPage(POSTS_PAGE);
export {user};
export {page};
export {posts};
export {logout};
export {goToPage};
export {getToken};
export {USER_POSTS_PAGE};
