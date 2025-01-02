// HTML del aviso de cookies
const cookieHTML = `
<div class="cookie-card" id="cookieCard">
  <span class="title">🍪 Cookie Notice</span>
  <p class="description">
    We use cookies to ensure that we give you the best experience on our website. 
    <a href="#">Read cookies policies</a>.
  </p>
  <div class="actions">
    <button class="pref" id="managePreferences">
      Manage your preferences
    </button>
    <button class="accept" id="acceptCookies">
      Accept
    </button>
  </div>
</div>`;

// Función para establecer una cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; Secure`;
}

// Función para obtener una cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Inyectar el HTML en el DOM
document.addEventListener('DOMContentLoaded', () => {
  if (!getCookie('cookiesAccepted')) {
    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    const cookieCard = document.getElementById('cookieCard');
    const acceptButton = document.getElementById('acceptCookies');
    const manageButton = document.getElementById('managePreferences');

    cookieCard.style.display = 'block'; // Mostrar aviso

    // Manejar aceptación de cookies
    acceptButton.addEventListener('click', () => {
      setCookie('cookiesAccepted', 'true', 365); // Guardar cookie por 1 año
      cookieCard.style.display = 'none'; // Ocultar aviso
    });

    // Manejar preferencias (puedes personalizar esta acción)
    manageButton.addEventListener('click', () => {
      alert('Manage your cookie preferences here.');
    });
  }
});