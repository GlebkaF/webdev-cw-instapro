import { getToken } from "../index.js";
import { uploadPost } from "../api.js";
import { safeHtmlString } from "../helpers.js"
import { renderHeaderComponent } from "./header-component.js"
import { renderUploadImageComponent } from "./upload-image-component.js";

function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";

  appEl.innerHTML = `
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

  renderHeaderComponent({ element: document.querySelector(".header-container") });

  renderUploadImageComponent({
    element: appEl.querySelector(".upload-image-container"),
    onImageUrlChange(newImageUrl) {
      imageUrl = newImageUrl;
    },
  });

  document.getElementById("add-button").addEventListener("click", () => {
    setError("");

    if (!imageUrl) {
      alert("Не выбрана фотография");
      return;
    }

    if (!document.getElementById("text-textarea").value) {
      alert("Опишите фотографию");
      return;
    }

    uploadPost({
      token: getToken(),
      description: safeHtmlString(document.getElementById("text-textarea").value),
      imageUrl: imageUrl
    })
      .then(() => {
        return onAddPostClick();
      })
      .catch((error) => {
        setError("Извините, не предвиденная ошибка. Попробуйте позднее.");
        return console.warn(error);
      });
  }
  )

  function setError(message) {
    return appEl.querySelector(".form-error").textContent = message;
  };
}

export { renderAddPostPageComponent }