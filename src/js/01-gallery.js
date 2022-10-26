import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from 'simplelightbox';
// // Дополнительный импорт стилей
// import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryList = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryList);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	  <div class="gallery__item">
		<a class ="gallery__link" href ="${original}">
		<img
		class = "gallery__image"
		src= "${preview}"
		data-source = "${original}"
		alt = "${description}"
		/>
		</a>
		</div>
	  `;
    })
    .join('');
}

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
