import { galleryItems } from './gallery-items.js';

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce((acc, { preview, original, description }) =>
  acc +=
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
  </a>
  </li> `, ''
);

galleryRef.innerHTML = galleryMarkup;

//Додаємо слухача на UL
galleryRef.addEventListener('click', onClickImg);

//Обробляэмо подію кліка на IMG - відкриваємо модалку
function onClickImg(evt) {
  evt.preventDefault();
  const source = evt.target.dataset.source;
  
  if (evt.target.nodeName !== 'IMG') return;
  
  openModal(source);
}

//Поведінка модалки при відкритті/закритті
const instance = basicLightbox.create(`<img>`,
  {
    onShow: () => { window.addEventListener("keydown", onPressESC); },
    onClose: () => { window.removeEventListener("keydown", onPressESC); },
  }
);

// Відкриття модалки, прив'язка instance до обраного IMG
function openModal(source) {
  instance.element().querySelector('img').src = source;
  instance.show(); 
}

// Закриття модалки по ESC
function onPressESC(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  };
}