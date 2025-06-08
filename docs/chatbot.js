// Simple chatbot widget for sitio_web_roger
// Displays a floating chat box that echoes user messages

document.addEventListener('DOMContentLoaded', () => {
  const N8N_WEBHOOK_URL = 'https://example.com/webhook/chatbot';
  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <button class="chat-toggle" aria-label="Abrir chat">Chat</button>
    <div class="chat-box hidden">
      <div class="chat-messages"></div>
      <form class="chat-form">
        <input type="text" placeholder="Escribe tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </div>`;

  document.body.appendChild(widget);

  const toggle = widget.querySelector('.chat-toggle');
  const box = widget.querySelector('.chat-box');
  const messages = widget.querySelector('.chat-messages');
  const form = widget.querySelector('.chat-form');
  const input = form.querySelector('input');

  toggle.addEventListener('click', () => {
    box.classList.toggle('hidden');
    if (!box.classList.contains('hidden')) {
      input.focus();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    // Send message to n8n webhook for processing
    fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    }).catch(() => { /* ignore network errors */ });

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot';
    botMsg.textContent = 'Gracias por tu mensaje: ' + text;
    messages.appendChild(botMsg);

    messages.scrollTop = messages.scrollHeight;
    input.value = '';
  });
});
