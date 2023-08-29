import { USER_POSTS_PAGE } from "../helpers/routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";


renderHeaderComponent
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
    <div class="header-container">
<div class="page-header">
    <h1 class="logo">instapro</h1>
    <button class="header-button add-or-login-button">
    <div title="Добавить пост" class="add-post-sign"></div>
    </button>
    <button title="Админ" class="header-button logout-button">Выйти</button>  
    
</div>

</div>
    <div class="form">
      <h3 class="form-title">Добавить пост</h3>
      <div class="form-inputs">
        <div class="upload-image-container">
<div class="upload-image">

</div>
</div>
        <label>
          Опишите фотографию:
          <textarea class="input textarea" id="inputId" rows="4"></textarea>
          </label>
          <button class="button" id="add-button">Добавить</button>
      </div>
    </div>
  </div>
  `;


    appEl.innerHTML = appHtml;
    const inputAreaElement = document.querySelector('#inputId');

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: inputId.value,
        imageUrl: imageUrl,
      });
    });
  };



  render();
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  const uploadImageContainer = appEl.querySelector(".upload-image");

  if (uploadImageContainer) {
    renderUploadImageComponent({
      element: appEl.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });
  }

}

