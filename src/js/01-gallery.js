// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const containerGalleryEl = document.querySelector('.gallery');
const galleryMarkup = creatGalleryMarkup(galleryItems);
containerGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

containerGalleryEl.addEventListener('click', clickPictureGallry);

function clickPictureGallry(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
};


// console.log(galleryMarkup)

function creatGalleryMarkup(galleryItems) {

  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

  }).join('');
};


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});

