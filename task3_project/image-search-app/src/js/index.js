import axios from 'axios';
import iziToast from 'izitoast';
import '../css/styles.css';
import { createImageCards } from '../templates/imageCard';

const API_KEY = '50286538-244177f87d7b60548b3e53ddc';
const BASE_URL = 'https://pixabay.com/api/';
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = form.elements.query.value.trim();

    if (!query) {
        iziToast.warning({
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        return;
    }

    gallery.innerHTML = '';
    showLoader();

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });

        const images = response.data.hits;

        if (images.length === 0) {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }

        gallery.innerHTML = createImageCards(images);
        lightbox.refresh();
    } catch (err) {
        iziToast.error({
            message: 'Something went wrong. Try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});

function showLoader() {
    loader.classList.remove('hidden');
}
function hideLoader() {
    loader.classList.add('hidden');
}
