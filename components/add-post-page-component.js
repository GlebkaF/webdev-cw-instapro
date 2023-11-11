import { user, getToken, goToPage } from "../index.js";
import { uploadImage, addPost } from "../api.js";
import { POSTS_PAGE, LOADING_PAGE } from "../routes.js";

export function renderAddPostPageComponent({ appEl }) {
  let token = getToken();

  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
            <div class="page-header">
            <h1 class="logo">instapro</h1>
            <button class="header-button add-or-login-button">
                ${
                user
                ? `<div title="Добавить пост" class="add-post-sign"></div>`
                : "Войти"
                }
            </button>
            ${
            user
            ? `<button title="${user.name}" class="header-button logout-button">Выйти</button>`
            : ""
            }
        </div>
        <div class="form">
            <h3 class="form-title">Добавить пост</h3>
            <div class="form-inputs">
                <div class="upload-image-container">
                    <div class="upload=image">

                        <label class="file-upload-label secondary-button">
                            <input type="file" class="file-upload-input" style="display:none">
                            Выберите фото
                        </label>
                    </div>
                </div>
                <label>
                    Опишите фотографию:
                    <textarea class="input textarea" rows="4"></textarea>
                </label>
                <button class="button" id="add-button">Добавить</button>
            </div>
        </div>`;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      const textInput = document.querySelector(".textarea").value;
      const imageElement = document.querySelector(".file-upload-input");
      goToPage(LOADING_PAGE);
      uploadImage({ file: imageElement.files[0] })
      .then((data) => {
        let imageLoad = data.fileUrl;
        return imageLoad;
      })
      .then((imageLink) => {
        return addPost({
          description: textInput,
          imageUrl: imageLink,
          token,
        });
      })
      .then(() => goToPage(POSTS_PAGE))
      .catch((error) => {
        if (error.message === "Что не так с объектом") {
          alert('Попробуйте отправить пост еще раз');
          renderAddPostPageComponent({ appEl });
        }
      })
    });
  };

  render();
}
