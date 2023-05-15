const dateElement = document.querySelector('[data-js="date"]');
const date = new Date().toLocaleDateString("de-DE");
dateElement.textContent = date;
