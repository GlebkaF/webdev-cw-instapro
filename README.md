# Instapro

MVP аналога популярной соц. сети для обмена фотографиями

## Ссылка на приложение:

https::

## Первоначальная оценка

1000 часов

## Фактически затраченное время

YYYY часов


<!-- Там функция называется deletePost, у меня называется deleteFetch  -->
<!-- Там функция называется removeLikes, у меня называется deleteLikes -->

<!-- //удаление записи
  const deleteButtons = document.querySelectorAll(".delete-button");

  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const id = deleteButton.dataset.id;
      deleteFetch(id);
    });
  }

  //счетчик лайков у каждого комментария
  function getLikePost() {

    const likesButton = document.querySelectorAll('.like-button');
    for (const like of likesButton) {
      like.addEventListener("click", (event) => {
        event.stopPropagation();
        const id = like.dataset.id;
        const liked = like.dataset.liked;

        if (liked == 'false') {
          putLikes(id);
        } else {
          deleteLikes(id);
        }

      })
    }
  };
  getLikePost(); -->



