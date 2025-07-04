// scripts.js para sitio_web_roger
// Lógica básica para enviar el formulario de contacto utilizando fetch

// Se ejecuta al final del documento gracias al atributo `defer`
const formSection = document.querySelector('#form-contacto form');
if (formSection) {

  // Obtiene la URL del webhook desde una variable global o atributo data-
  const n8nWebhookURL =
    window.n8nWebhookURL || formSection.dataset.webhookUrl;

  if (!n8nWebhookURL) {
    console.warn('n8nWebhookURL no configurado');
    return;
  }

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
