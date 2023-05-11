// Получаем элементы интерфейса
const smallImagesContainer = document.getElementById("small-images-container");
const bigImageContainer = document.getElementById("big-image-container");

// Массив ссылок на картинки
const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/241/200/300",
];

// Функция для создания элемента img и добавления его в контейнер маленьких картинок
function createSmallImage(imageSrc) {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imageSrc);
  imageElement.classList.add("small-image");
  smallImagesContainer.appendChild(imageElement);
}

// Функция для отображения выбранной маленькой картинки в большем размере
function showBigImage(event) {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("small-image")) {
    const imageSrc = clickedElement.getAttribute("src");
    const bigImageElement = document.createElement("img");
    bigImageElement.setAttribute("src", imageSrc);
    bigImageElement.classList.add("big-image");
    bigImageContainer.innerHTML = "";
    bigImageContainer.appendChild(bigImageElement);
  }
}

// Добавляем маленькие картинки на страницу
for (let i = 0; i < images.length; i++) {
  createSmallImage(images[i]);
}

// Обрабатываем клики на маленькие картинки
smallImagesContainer.addEventListener("click", showBigImage);