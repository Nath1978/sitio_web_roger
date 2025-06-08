// scripts.js para sitio_web_roger
// Lógica básica para enviar el formulario de contacto utilizando fetch

document.addEventListener('DOMContentLoaded', () => {
  const formSection = document.querySelector('#form-contacto form');
  if (!formSection) return;

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
});
