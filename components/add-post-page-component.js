import { user } from "../index.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
  <div class="header-container"></div>

  <div class="page-header">
  <h1 class="logo">instapro</h1>
  <button class="header-button add-or-login-button"></button>
  <button title="${user.name}" class="header-button logout-button">Выйти</button>
  </div>
  </div>


  <div class="form">
    <h3 class="form-title">Добавить пост</h3>
    <div class="form-inputs">

      <div class="upload-image-container">
        <div class="upload=image">
        <div class="upload-image"></div>
    </div>

      </div>

      <label>
        "Опишите фотографию: "
        <textarea class="input textarea" rows="4" id="description"></textarea>
      </label>

      <button class="button" id="add-button">Добавить</button>
    </div>
  </div>
</div>
  `;

    appEl.innerHTML = appHtml;

    renderUploadImageComponent({
      element: document.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });

    document.getElementById("add-button").addEventListener("click", () => {
      const description = document.getElementById("description").value;
      onAddPostClick({
        description: description,
        imageUrl: imageUrl,
      });
    });
  };

  render();
}

/* 

<div class="page-header">
<h1 class="logo">instapro</h1>
<button class="header-button add-or-Login-button">
  <div title="Добавить пост” class="add-post-sign"></div>
</button>
<button title="${user.name}" class="header-button logout-button">Выйти</button>
</div> 



<div class="upload-image"></div>

*/
