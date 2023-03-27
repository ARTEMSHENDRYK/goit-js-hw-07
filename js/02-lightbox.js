import { galleryItems } from './gallery-items.js';

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce((acc, { preview, original, description }) =>
  acc +=
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  </li>`, ''
);

galleryRef.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom', //Default value
  }
);