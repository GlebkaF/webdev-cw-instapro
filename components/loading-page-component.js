import { renderHeaderComponent } from "./header-component.js";

function renderLoadingPageComponent({ appEl }) {
  appEl.innerHTML = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="loading-page">
        <div class="loader">
          <div></div><div></div><div></div>
        </div>
      </div>
    </div>
`;

  renderHeaderComponent({ element: document.querySelector(".header-container") });
}

export { renderLoadingPageComponent }