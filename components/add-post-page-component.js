import { renderHeaderComponent } from "./header-component.js";
import { goToPage } from "../index.js";
import { addPostApi, getPosts } from "../api.js";
import { getToken } from "../index.js";
import { renderUploadImageComponent } from "./upload-image-component.js";
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const renderAdd = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
   
    <div class="page-container">
      <div class="header-container">
  <div class="page-header">
      <h1 class="logo">instapro</h1>
      <button class="header-button add-or-login-button">
      <div title="Добавить пост" class="add-post-sign"></div>
      </button>
      <button title="dfd" class="header-button logout-button">Выйти</button>  
      
  </div>
  
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
      </div>
    </div>

  `;

    appEl.innerHTML = appHtml;
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
  
    const uploadImageContainer = appEl.querySelector(".upload-image-container");
  
    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      })
      document.getElementById("add-button").addEventListener("click", () => {
        const descriptionElement = document.querySelector(".textarea")
        addPostApi({description:descriptionElement.value, imageUrl: imageUrl, token: getToken()});
        onAddPostClick({
          description: descriptionElement.value,
          imageUrl: imageUrl,
        });
      });
    }  
   
  };


  renderAdd();
}
