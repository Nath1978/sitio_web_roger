// scripts.js para sitio_web_roger
// Lógica básica para enviar el formulario de contacto utilizando fetch

// Se ejecuta al final del documento gracias al atributo `defer`
const formSection = document.querySelector('#form-contacto form');
if (formSection) {

  // URL publica generada por n8n detras de Ngrok
  const n8nWebhookURL =
    'https://humane-asp-smart.ngrok-free.app/webhook/roger-contacto';

  formSection.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formSection);

    try {
      await fetch(n8nWebhookURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

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
