// scripts.js para sitio_web_roger
// Lógica básica para enviar el formulario de contacto utilizando fetch

// Se ejecuta al final del documento gracias al atributo `defer`
const formSection = document.querySelector('#form-contacto form');
if (formSection) {

  // URL definitiva del webhook generado por n8n + Ngrok
  const n8nWebhookURL =
    'https://humane-asp-smart.ngrok-free.app/webhook-test/roger-contacto';

  formSection.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formSection);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(n8nWebhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      formSection.reset();
      alert('¡Mensaje enviado exitosamente!');
    } catch (error) {
      alert('No se pudo enviar el mensaje. Por favor, inténtalo más tarde.');
    }
  });
}

// Menú hamburguesa
const toggleBtn = document.getElementById('menu-toggle');
const navList = document.querySelector('.main-nav ul');

if (toggleBtn && navList) {
  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}
