import { addPost } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick, token }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
       <h3 class="form-title">Добавить пост</h3>
         <div class="form-inputs">
          <div class="upload-image-container">
            <div class="upload=image">
              <label class="file-upload-label secondary-button">
              <input type="file" class="file-upload-input" style="display:none">Выберите фото</label>
            </div>
          </div>
          <label>Опишите фотографию:
            <textarea id="description" class="input textarea" rows="4"></textarea>
          </label>
          <button class="button" id="add-button">Добавить</button>
        </div>
    </div>
  `;

    appEl.innerHTML = appHtml;

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });


    document.getElementById("add-button").addEventListener("click", () => {
      let description = document.getElementById("description").value
      let tokens = token;
      addPost({
        token: tokens,
        description: description,
        imageUrl: "https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1684177127125-kartinka_sinego_iz_raduzhnyh_druzej_001516.jpg"
      })


      onAddPostClick({
        description: description,
        imageUrl: "https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1684177127125-kartinka_sinego_iz_raduzhnyh_druzej_001516.jpg",
      });
    });
  };

  render();
}
