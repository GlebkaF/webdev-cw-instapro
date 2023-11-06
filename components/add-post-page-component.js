import { addPost, getPosts, uploadImage } from "../api.js";
import { renderUploadImageComponent } from "./upload-image-component.js";
import { getToken, goToPage } from "../main.js";
import { POSTS_PAGE } from "../routes.js";
import { sanitaze } from "../sanitaze.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
      <div class="page-container">
        <div class="header-container">
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
              <div class="form-error"></div>
              <button class="button" id="add-button">Добавить</button>
          </div>
        </div>
      </div>
  `;

    appEl.innerHTML = appHtml;

    const uploadImageContainer = appEl.querySelector(".upload-image-container");

    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }

    let descriptionInput = document.querySelector(".textarea");

    document.getElementById("add-button").addEventListener("click", () => {
      addPost({
        description: sanitaze(descriptionInput.value),
        imageUrl: imageUrl,
        token: getToken(),
      }).then(() => {
        goToPage(POSTS_PAGE);
      });
    });
  };

  render();
}
