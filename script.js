/**
 * @features
 * - **Button Navigation**: Attaches click handlers to “Adopt” and “Contact” buttons.
 * - **Client‑Side Routing**: Uses `window.location.href` to navigate to the respective pages.
 *
 * @technologies
 * - JavaScript (ES6+)
 * - Browser APIs: DOM (`getElementById`, `addEventListener`), `window.location`
 */

document.getElementById('adopt').addEventListener('click', () => {
  window.location.href = './adopt-cat/adopt.html';
})

document.getElementById('contact').addEventListener('click', () => {
  window.location.href = './contact/contact.html';
})