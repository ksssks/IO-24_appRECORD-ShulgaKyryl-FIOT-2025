const images = [
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322851.jpg?t=st=1745516986~exp=1745520586~hmac=37897c9794c867026f760cf1dabc730d86c35ceb172f9b6ef4b409f6bb982234&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322851.jpg?t=st=1745516986~exp=1745520586~hmac=37897c9794c867026f760cf1dabc730d86c35ceb172f9b6ef4b409f6bb982234&w=1380',
        description: 'Перше зображення',
    },
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322847.jpg?t=st=1745516864~exp=1745520464~hmac=4d21d2f41425c06f693eeb1d49738c6c25d42941e8a1f8e14af7673b2fc9a83d&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322847.jpg?t=st=1745516864~exp=1745520464~hmac=4d21d2f41425c06f693eeb1d49738c6c25d42941e8a1f8e14af7673b2fc9a83d&w=1380',
        description: 'Друге зображення',
    },
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322834.jpg?t=st=1745516900~exp=1745520500~hmac=252c84d3ef5bea7a03b4671b2175aff6c7396b3e2b5fc49c923767e8ad63d54e&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322834.jpg?t=st=1745516900~exp=1745520500~hmac=252c84d3ef5bea7a03b4671b2175aff6c7396b3e2b5fc49c923767e8ad63d54e&w=1380',
        description: 'Третє зображення',
    },
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322853.jpg?t=st=1745516859~exp=1745520459~hmac=705bc341634e4583580c15df2a3fd754d80058b7f2d635501651b7abf122d0dc&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322853.jpg?t=st=1745516859~exp=1745520459~hmac=705bc341634e4583580c15df2a3fd754d80058b7f2d635501651b7abf122d0dc&w=1380',
        description: 'Четверте зображення',
    },
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322837.jpg?t=st=1745517243~exp=1745520843~hmac=824f521dff3d574de4fd9d6a265ccb7ba29e16d5e747c107db0507a4ffc14611&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322837.jpg?t=st=1745517243~exp=1745520843~hmac=824f521dff3d574de4fd9d6a265ccb7ba29e16d5e747c107db0507a4ffc14611&w=1380',
        description: 'Пяте зображення',
    },
    {
        preview: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322936.jpg?t=st=1745516977~exp=1745520577~hmac=af9c295aaf2bc1fbecb6e8d6c6772e694f9c10c739ae19a72d70732646c67bce&w=1380',
        original: 'https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322936.jpg?t=st=1745516977~exp=1745520577~hmac=af9c295aaf2bc1fbecb6e8d6c6772e694f9c10c739ae19a72d70732646c67bce&w=1380',
        description: 'Шосте зображення',
    },


];

// Створюємо розмітку для кожного елементу галереї
const galleryEl = document.querySelector('.gallery');

const markup = images
    .map(({ preview, original, description }) => {
        return `
      <li class="gallery-item">
        <a href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join('');

galleryEl.innerHTML = markup;

// Делегування подій
galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    const clickedImg = event.target;
    if (clickedImg.nodeName !== 'IMG') return;

    const largeImageURL = clickedImg.dataset.source;
    const description = clickedImg.alt;

    const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${description}" />
  `);

    instance.show();
}
