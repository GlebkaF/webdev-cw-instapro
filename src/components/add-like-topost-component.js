

export const addLikeFunction = (posts) => {

    const likes = document.querySelectorAll('.like-button');
    likes.forEach((like, index) => {
        like.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = like.dataset.postId;
            console.log(index);
            let post = posts[index];
            console.log(post)
            // let { isLiked } = post
            // if (isLiked) {
            //     // Ревлизовать апи удаления Лайков
            //     disLike({ token, id })
            //         .then((newPost) => {
            //             posts[index].likes = newPost.post.likes;
            //             renderApp();
            //         })

            // } else {
            //     // Реализовать апи добавления Лайков
            //     addLike({ token, id })
            //         .then((newPost) => {
            //             posts[index].likes = newPost.post.likes;
            //             renderApp();
            //         })
            // }
        })
    })
}

