// chatbot.js – versión mejorada (sin dependencias externas)
// Sustituye YOUR_N8N_CHATBOT_WEBHOOK por tu URL real de n8n (método POST JSON).

document.addEventListener('DOMContentLoaded', () => {
  /* ========= Elementos base ========= */
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'chatbot-toggle';
  toggleBtn.textContent = '💬';
  document.body.appendChild(toggleBtn);

  const chatbotWindow = document.createElement('div');
  chatbotWindow.id = 'chatbot-window';
  chatbotWindow.innerHTML = `
    <header>Chatbot</header>
    <div class="messages"></div>
    <form>
      <input type="text" placeholder="Escribe un mensaje..." autocomplete="off" required />
    </form>`;
  document.body.appendChild(chatbotWindow);

  const form     = chatbotWindow.querySelector('form');
  const input    = form.querySelector('input');
  const messages = chatbotWindow.querySelector('.messages');

  /* ========= Abrir / cerrar ========= */
  toggleBtn.addEventListener('click', () => {
    const isOpen = chatbotWindow.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.textContent = isOpen ? '✖' : '💬';
  });

  /* ========= Envío ========= */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    appendBubble(text, 'user');
    input.value = '';

    /* ------- Llamada al backend (n8n) ------- */
    const webhookURL =
      window.n8nChatbotWebhookURL ||
      document.body.dataset.chatbotWebhookUrl;
    if (!webhookURL) {
      console.warn('n8nChatbotWebhookURL no configurado para chatbot');
      appendBubble('Configuración faltante. Intenta más tarde.', 'bot');
      return;
    }
    try {
      const res = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();          // espera { reply: "..." }
      appendBubble(data.reply || '🤖 …', 'bot');
    } catch (err) {
      appendBubble('Ups, no pude responder. Intenta de nuevo.', 'bot');
      console.error(err);
    }
  });

  /* ========= Helper ========= */
  function appendBubble(content, who = 'bot') {
    const div = document.createElement('div');
    div.className = `message ${who}`;
    div.textContent = content;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
});
