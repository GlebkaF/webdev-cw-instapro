import { deletePost } from "../api.js";
import { POSTS_PAGE, getToken, goToPage } from "../index.js";

function deletePostAndRender({ id, element }) {
    element.disabled = true
    deletePost({ token: getToken(), id })
        .then(() => {
            goToPage(POSTS_PAGE);
        })
}

export { deletePostAndRender }