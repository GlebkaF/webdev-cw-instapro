import {renderHeaderComponent} from "./header-component.js";
import {renderUploadImageComponent} from "./upload-image-component.js";
import {uploadPost} from "../api.js";
import {getToken} from "../index.js";

function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
    <div class="header-container"></div>
    <h3 class="from-title">Добавить пост</h3>
    <div class="form-inputs">
      <div class="upload-image-container"></div>
      <label>
        Опишите фотографию:
        <textarea id="text-textarea" class="input textarea" rows="4"></textarea>
      </label>
      <div class="form-error"></div>
      <button class="button" id="add-button">Добавить</button>
    </div>
  </div>
  `;

    appEl.innerHTML = appHtml;
    renderHeaderComponent({element: document.querySelector(".header-container")});
    renderUploadImageComponent({
      element: appEl.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });
    document.getElementById("add-button").addEventListener("click", () => {
      if (!imageUrl) {
        alert("Не выбрана фотография");
        return;
      }
      if (!document.getElementById("text-textarea").value) {
        alert("Опишите фото");
        return;
      }
   
    uploadPost({token: getToken(), description: safeHtmlString(document.getElementById("text-textarea").value), imageUrl: imageUrl})
    .then(()=> {
      onAddPostClick({
        description: "Описание картинки",
        imageUrl: "https://image.png",
      });
    })
     });
  };


  render();
}
export { renderAddPostPageComponent };//import пишем в начале кода, а export в конец
