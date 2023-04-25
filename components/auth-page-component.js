import { safeHtmlString } from "../helpers.js"
import { loginUser, registerUser } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

function renderAuthPageComponent({ appEl, setUser }) {
  let isLoginMode = true;
  let imageUrl = "";

  renderForm();

  function renderForm() {
    appEl.innerHTML = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="form">
        <h3 class="form-title">${isLoginMode ? "Вход в&nbsp;Instapro" : "Регистрация в&nbsp;Instapro"}</h3>
        <div class="form-inputs">
        ${!isLoginMode
        ?
        `<div class="upload-image-container"></div>
          <input type="text" id="name-input" class="input" placeholder="Имя"/>`
        :
        ""
      }
          <input type="text" id="login-input" class="input" placeholder="Логин"/>
          <input type="password" id="password-input" class="input" placeholder="Пароль"/>
          <div class="form-error"></div>
          <button class="button" id="login-button">${isLoginMode ? "Войти" : "Зарегистрироваться"}</button>
        </div>
        <div class="form-footer">
          <p class="form-footer-title">
            ${isLoginMode ? "Нет аккаунта?" : "Уже есть аккаунт?"}
            <button class="link-button" id="toggle-button">${isLoginMode ? "Зарегистрироваться." : "Войти."}</button>
          </p> 
        </div>
      </div>
    </div>`;

    renderHeaderComponent({ element: document.querySelector(".header-container") });

    const uploadImageContainer = appEl.querySelector(".upload-image-container");

    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }

    function checkButton() {
      document.getElementById("login-button").addEventListener("click", () => {
        setError("");

        if (isLoginMode) {
          const login = document.getElementById("login-input").value;
          const password = document.getElementById("password-input").value;

          if (!login) {
            alert("Введите логин");
            return;
          }

          if (!password) {
            alert("Введите пароль");
            return;
          }

          document.getElementById("login-button").disabled = true;

          loginUser({
            login: login,
            password: password,
          })
            .then((user) => {
              setUser(user.user);
            })
            .catch((error) => {
              document.getElementById("login-button").disabled = false;
              setError(error.message);
              checkButton();
              return console.warn(error);
            });
        } else {
          const login = document.getElementById("login-input").value;
          const name = document.getElementById("name-input").value;
          const password = document.getElementById("password-input").value;
          if (!name) {
            alert("Введите имя");
            return;
          }
          if (!login) {
            alert("Введите логин");
            return;
          }

          if (!password) {
            alert("Введите пароль");
            return;
          }

          if (!imageUrl) {
            alert("Не выбрана фотография");
            return;
          }

          document.getElementById("login-button").disabled = true;

          registerUser({
            login: safeHtmlString(login),
            password: safeHtmlString(password),
            name: safeHtmlString(name),
            imageUrl,
          })
            .then((user) => {
              setUser(user.user);
            })
            .catch((error) => {
              document.getElementById("login-button").disabled = false;
              setError(error.message);
              checkButton();
              return console.warn(error);
            });
        }
      });
    }

    checkButton();

    document.getElementById("toggle-button").addEventListener("click", () => {
      isLoginMode = !isLoginMode;
      renderForm();
    });

    function setError(message) {
      appEl.querySelector(".form-error").textContent = message;
    };
  };
}

export { renderAuthPageComponent }