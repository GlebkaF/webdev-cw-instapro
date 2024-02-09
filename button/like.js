import { POSTS_PAGE, USER_POSTS_PAGE } from "../routes.js";
import { delLike, addLike } from "../api.js";
import { getToken,  } from "../api.js";
//Активность кнопки лайк
export const initLikeListener = () => {
    const buttonLike = document.querySelectorAll(".like-button");
    for (const iteratorLike of buttonLike) {
      iteratorLike.addEventListener("click", (event) => {
  
        event.stopPropagation();
        if (getToken) {
          alert("autorize")
          return
        }
        const index = iteratorLike.dataset.index;
        commentList[index].likes += commentList[index].isLiked ? -1 : +1;
        commentList[index].isLiked = !commentList[index].isLiked;
        renderComments(); //перерисовываем форму для лайков с счетчиком
        initLikeListener()
  
      });
    }
  
  }