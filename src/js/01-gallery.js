// Add imports above this line
<<<<<<< HEAD
import Simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
function createItemForGallary(galleryItems) {
  return galleryItems
    .map(item => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>`;
    })
    .join('');
}
const elemAdd = createItemForGallary(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', elemAdd);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryEl);

console.log(galleryItems);
console.log(Simplelightbox);
=======
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
>>>>>>> 3e31aa00d34d2819fdd62d559642a62c650b12e2
