# Shelter Foot Gallery

A multipage, responsive website for browsing and “adopting” cat breeds, plus a contact form-built entirely with JavaScript, HTML5, and CSS.

---

## My Approach

When building this app , I focused on:

1. **Clean HTML Templating**  
   - Defined a reusable `<template>` for each cat card to avoid duplicated markup.  
   - Kept HTML semantic and minimal - no inline JS.

2. **Modular JavaScript**  
   - **Data Layer**: `fetchCatData()` handles the HTTP GET and JSON parsing.  
   - **Rendering Layer**: `onInit()` drives the startup flow, `createCatCard()` clones & populates the template, and we simply call `grid.appendChild(card)` once per item.  
   - **Interaction Layer**: `setupAdoptButton()` wires each “Adopt Me” button to localStorage persistence, mock POST requests, and UI feedback.  

3. **One‑Time Data Load**  
   - Loaded the cat dataset exactly once on `DOMContentLoaded` - no refetches on interaction.

4. **Adoption Workflow & State**  
   - Persisted adopted cats in `localStorage` so actions survive reloads.  
   - Sent mock POST requests with clear success/error messaging per card, without re-rendering the grid.

5. **Responsive & Accessible UI**  
   - Used CSS Grid/Flexbox with mobile‑first media queries for tablet and phone.  
   - Ensured accessibility with proper `alt` attributes, button states, and focus behavior.

6. **Progressive Enhancement & Maintainability**  
   - Core content/layout work as plain HTML/CSS if JS is unavailable.  
   - JS Doc‑style comments and clean file structure make the code easy to read, test, and extend.


##  Features

- **Dynamic Cat Gallery**  
  - Fetches breed data from [TheCatAPI](https://thecatapi.com) on page load  
  - Renders each cat as a card cloned from an HTML `<template>` 
  - “Adopt Me” buttons persist selections in `localStorage` and send a mock POST via Beeceptor   

- **Client‑Side Routing (Home)**  
  - Home uses two buttons (`#adopt` & `#contact`) wired in `script.js` to navigate between pages   
- **Contact Form**  
  - Validates required fields (first name, last name, email, message) on submit  
  - Saves messages in `localStorage` and displays success/error feedback :contentReference  

- **Responsive Design**  
  - Mobile‑first layouts with CSS Grid and Flexbox  
  - Breakpoints at 768px to stack nav and resize images   

---

##  Tech Stack

- **Languages**: JavaScript (ES6+), HTML5, CSS3  
- **APIs**:  
  - **GET**: TheCatAPI (cat breeds)  
  - **POST**: Beeceptor (mock adoption endpoint)  
- **Browser APIs**: `fetch`, `localStorage`, DOM methods (`querySelector`, `addEventListener`)  
- **No frameworks**—all logic in plain JS modules.

---

##  Project Structure

├── index.html # Home page (Welcome section and nav buttons)

├── script.js # Home button click handlers

├── style.css # Global & home styles

├── adopt.html # “Adopt a Cat” page (gallery + template) 

├── adopt.css # Gallery page styles

├── adopt.js # Fetch & render cats; setup adoption buttons 


├── about.html # About page (mission, story, sponsors) 

├── about.css # About page styles


├── contact.html # Contact form page 

├── contact.css # Contact form styles
└── contact.js # Form validation & localStorage logic 

##  Installation & Run

 **Clone**  
   ```bash
   git clone git@github.com:mariosmorfo/QuadraWeb-project.git
   cd QuadraWeb-project

   **Python**
   python -m http.server 8000

   **VS Code Live Server**
   Install the Live Server extension by Ritwick Dey.

   Right-click any HTML file → Open with Live Server.