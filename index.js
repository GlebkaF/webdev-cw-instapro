import { getPosts, allPostsUser } from "./api.js";
import { renderAllPostsUser } from "./components/all-posts-user.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { getUserFromLocalStorage, removeUserFromLocalStorage, saveUserToLocalStorage, } from "./helpers.js";

const AUTH_PAGE = "auth";
const POSTS_PAGE = "posts";
const LOADING_PAGE = "loading";
const ADD_POSTS_PAGE = "add-post";
const USER_POSTS_PAGE = "user-posts";
const appEl = document.getElementById("app");

let posts;
let userPosts;
let page = null;
let user = getUserFromLocalStorage();

goToPage(POSTS_PAGE);

function goToPage(newPage, data) {
  if ([POSTS_PAGE, AUTH_PAGE, ADD_POSTS_PAGE, USER_POSTS_PAGE, LOADING_PAGE].includes(newPage)) {
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
          goToPage(POSTS_PAGE);
          return console.error(error);
        });
    }

    if (newPage === ADD_POSTS_PAGE) {
      page = user ? ADD_POSTS_PAGE : AUTH_PAGE;
      return renderApp();
    }

    if (newPage === USER_POSTS_PAGE) {
      page = USER_POSTS_PAGE;
      // posts = [];
      return renderApp(data);
    }

    page = newPage;
    renderApp();

    return;
  }

  throw new Error("страницы не существует");
};

function renderApp(data) {
  if (page === LOADING_PAGE) {
    return renderLoadingPageComponent({ appEl });
  }

  if (page === POSTS_PAGE) {
    return renderPostsPageComponent({ appEl });
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
      onAddPostClick() {
        goToPage(POSTS_PAGE);
      },
    });
  }

  if (page === USER_POSTS_PAGE) {
    renderLoadingPageComponent({ appEl });
    return allPostsUser({ id: data })
      .then((allPostsUser) => {
        userPosts = allPostsUser;
        return renderAllPostsUser({ appEl, userPosts, });
      })
      .catch((error) => {
        alert("Произошла не предвиденная ошибка. Мы вернем вас на стартовую страницу")
        goToPage(POSTS_PAGE);
        return console.error(error);
      });
  }
};

function getToken() {
  const token = user ? `Bearer ${user.token}` : undefined;
  console.log(token);
  return token;
};

function logout() {
  user = null;
  removeUserFromLocalStorage();
  goToPage(POSTS_PAGE);
};

function newGetPosts(newPosts) {
  posts = newPosts;
}

export { POSTS_PAGE, USER_POSTS_PAGE, AUTH_PAGE, ADD_POSTS_PAGE, LOADING_PAGE, user, page, posts, appEl, logout, goToPage, getToken, newGetPosts }
