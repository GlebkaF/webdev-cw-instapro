import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick, imageUrl }) {
	const render = () => {
		// TODO: Реализовать страницу добавления поста
	const appHtml = `
	<div class="page-container">
		<div class="header-container"></div>
		<div class="form">
			<h3 class="form-title">Добавить пост</h3>
			<div class="form-inputs">
				<div class="upload-image-container">
					<div id="upload-image" class="upload-image">
						<label class="file-upload-label secondary-button">
							<input type="file" class="file-upload-input" style="display:none">
							Выберите фото
						</label>
					</div>
				</div>
				<label>
					Опишите фотографию:
					<textarea class="input textarea" rows="4" placeholder="Пожалуйста, добавьте описание к фото (для увеличения просмотров и лайков)"></textarea>
				</label>
				<button class="button" id="add-button">Добавить</button>
			</div>
		</div>
	</div>`;

	appEl.innerHTML = appHtml;

	renderHeaderComponent({
		element: document.querySelector(".header-container"),
	});
	
};

render();

renderUploadImageComponent({
	element: document.querySelector('.upload-image'),
	onImageUrlChange(newImageUrl) {
		imageUrl = newImageUrl;
	},
});


document.getElementById("add-button").addEventListener("click", () => {
	if (!imageUrl) {
		return alert("Пожалуйста, добавьте фото")
	}
	if (!appEl.querySelector(".textarea").value) {
		return alert("Пожалуйста, добавьте описание к фото")
	} else {

		onAddPostClick({
			description: appEl.querySelector(".textarea").value
			.replaceAll("&", "&amp;")
			.replaceAll("<", "&lt;")
			.replaceAll(">", "&gt;")
			.replaceAll('"', "&quot;"),
			imageUrl: imageUrl,
		});
	}
});
}
