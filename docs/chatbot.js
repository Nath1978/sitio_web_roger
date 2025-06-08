// chatbot.js - Chat widget placeholder for Roger's site

document.addEventListener('DOMContentLoaded', () => {
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
      <input type="text" placeholder="Escribe un mensaje..." required />
    </form>`;
  document.body.appendChild(chatbotWindow);

  toggleBtn.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
  });

  const form = chatbotWindow.querySelector('form');
  const input = form.querySelector('input');
  const messages = chatbotWindow.querySelector('.messages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const userMsg = document.createElement('div');
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  });
});
