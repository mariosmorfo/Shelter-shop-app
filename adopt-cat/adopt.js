/**
 * @features
 * - **Template-Based Rendering**: Uses an HTML <template> to define a reusable card layout.
 * - **Asynchronous API Fetching**: Retrieves cat breed data from TheCatAPI using fetch and async/await.
 * - **Dynamic DOM Insertion**: Populates each card with cat image, name, origin, temperament, and life span.
 * - **User Interaction**: Each card includes an "Adopt Me" button that sends a mock adoption request (POST).
 * - **Local Storage**: Saves adopted cat data in the browser's localStorage to persist user actions across sessions.
 * - **Feedback Messaging**: Displays success or error messages in response to user actions.
 * - **Errors**: Handles data fetch failures gracefully with console logging and user-visible messages.
 * 
 * @technologies
 * - JavaScript (ES6+)
 * - REST API (TheCatAPI, Beecceptor)
 */

document.addEventListener('DOMContentLoaded', () => {
  loadCats();
});

const apiUrl = 'https://api.thecatapi.com/v1/breeds';
const imageBase = 'https://cdn2.thecatapi.com/images';
const grid = document.getElementById('cat-grid');
const template = document.getElementById('cat-template');


async function loadCats() {
  try {
    const res = await fetch(apiUrl);
    const cats = await res.json();

    cats.forEach(cat => {
      const card = template.content.cloneNode(true);

      const img = card.querySelector('.cat-img');
      img.src = `${imageBase}/${cat.reference_image_id}.jpg`;
      img.alt = cat.name;
    
      card.querySelector('.cat-name').textContent = cat.name;
      card.querySelector('.cat-origin').textContent = cat.origin;
      card.querySelector('.cat-temperament').textContent = cat.temperament;
      card.querySelector('.cat-life').textContent = cat.life_span;

      const button = card.querySelector('button');
      const message = card.querySelector('.message');

      button.addEventListener('click', () => {
        const adoptedCat = {
          name: cat.name,
          origin: cat.origin,
          temperament: cat.temperament,
          life_span: cat.life_span      
        };
        let adopted = JSON.parse(localStorage.getItem('adoptedCats')) || [];
        adopted.push(adoptedCat); 
        localStorage.setItem('adoptedCats', JSON.stringify(adopted));

        fetch('https://echo.free.beeceptor.com/api/adopt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({adoptedCat})
        })
        .then(() => {
          message.textContent = 'Adoption request sent!';
          button.disabled = true;
        })
        .catch(() => {
          message.textContent = 'Something went wrong.';
        });
      });
    
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load cats', err);
    grid.innerHTML = '<p>Error loading cats.</p>';
  }
} 

