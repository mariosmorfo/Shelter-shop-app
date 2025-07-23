/**
 * @features
 * - **Form Initialization**: Listens for `DOMContentLoaded` and wires up the form’s submit button.
 * - **Input Collection & Validation**: Reads and trims values from firstname, lastname, email, phone, and message fields; 
 * - **Local Storage Persistence**: Retrieves existing messages and appends new submissions in `localStorage`
 * - **Feedback Messaging**: Shows error messages in red for validation failures and success messages in green color
 * - **Form Resetting**: Clears all input fields after a successful send.
 *
 * @technologies
 * - JavaScript (ES6+)
 * - Browser APIs: DOM (`addEventListener`, `querySelector`, `getElementById`), `localStorage`
 */

document.addEventListener('DOMContentLoaded', () => 
  {getUserData()} );

function getUserData() {
  const button = document.querySelector('button');
  const message = document.getElementById('status-message');

  button.addEventListener('click', (e) => {
    e.preventDefault(); 

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    if (!firstname || !lastname || !email || !userMessage) {
      message.textContent = 'Please fill in all required fields.';
      message.style.color = 'red';
      return;
    }

    const userData = {
      firstname,
      lastname,
      email,
      phone,
      message: userMessage,
    };

    const users = JSON.parse(localStorage.getItem('userMessages')) || [];
    users.push(userData);

    localStorage.setItem('userMessages', JSON.stringify(users));
    message.textContent = 'Your message has been sent successfully!';
    message.style.color = 'green';
    
    document.getElementById('myForm').reset();
}
)}

