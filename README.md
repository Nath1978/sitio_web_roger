# 🌿 Sitio Web para Roger

Este proyecto tiene como objetivo desarrollar un sitio web ecológico, elegante y funcional para Roger. Utiliza una paleta de verdes y grises, y se enfoca en una estructura limpia, fácil de mantener y escalar.

---

## 🔧 Tecnologías y Herramientas

- HTML + CSS + JavaScript
- Visual Studio Code + Cline (copiloto AI)
- **OpenAI Codex** para generación de código asistida por IA
- Git y GitHub (control de versiones)
- SiteDots (retroalimentación visual y colaborativa)
- PowerShell / Terminal para automatización local
- Google Sheets, n8n y Docker Compose con Ngrok para integraciones

---

## 🔁 Git: Flujo Básico de Versionamiento

1. Inicializa el repositorio:

```bash
git init
git add .
git commit -m "Estructura inicial del sitio para Roger"
```

2. Sube a GitHub:

```bash
git remote add origin https://github.com/tu_usuario/sitio_web_roger.git
git push -u origin main
```

## 📦 Dependencias y Pruebas

Para instalar las dependencias del proyecto y ejecutar las pruebas automáticas, usa los siguientes comandos:

```bash
pip install -r requirements.txt
pytest
```

## 🚀 Activación del Sitio Web

A continuación se muestra el flujo básico para ver el sitio de forma local:

1. Clona este repositorio en tu máquina.
2. Instala las dependencias con `pip install -r requirements.txt`.
3. Desde la carpeta `docs`, ejecuta `python -m http.server 8000`.
4. Abre <http://localhost:8000> en tu navegador para ver el sitio en acción.
5. (Opcional) Ejecuta `docker compose up -d` si deseas probar el flujo de contacto vía n8n y Ngrok.

## ✉️ Envío del formulario a Google Sheets con n8n

Para registrar las consultas del formulario en una hoja de cálculo, crea un flujo en n8n con un nodo **Webhook** y otro de **Google Sheets**. Usa la URL pública generada por el Webhook como valor para una variable global `n8nWebhookURL` o un atributo `data-webhook-url` en el formulario.

Ejemplo de configuración:

```html
<!-- Opción A: variable global -->
<script>
  window.n8nWebhookURL = 'https://TU_WEBHOOK_URL/webhook-test/roger-contacto';
</script>

<!-- Opción B: atributo data en el formulario -->
<form id="mi-form" data-webhook-url="https://TU_WEBHOOK_URL/webhook-test/roger-contacto">
  ...
</form>
```

### Docker-compose rápido para n8n

El repositorio incluye un `docker-compose.yml` para levantar n8n junto con un
túnel de Ngrok. Sigue estos pasos:

1. Copia `.env.example` a `.env` y coloca tu `NGROK_AUTHTOKEN`.
2. Ejecuta `docker compose up -d` para iniciar los contenedores.
3. Abre la UI local en [http://localhost:5678](http://localhost:5678) o la URL
   pública mostrada por Ngrok.

## 🤖 Configuración del Chatbot

El archivo `docs/chatbot.js` envía mensajes a un webhook de n8n. Define la URL
mediante una variable global `n8nChatbotWebhookURL` o con el atributo
`data-chatbot-webhook-url` en la etiqueta `<body>`.

```html
<!-- Variable global -->
<script>
  window.n8nChatbotWebhookURL = 'https://TU_WEBHOOK_URL/webhook-test/chatbot';
</script>

<!-- Atributo data en el body -->
<body data-chatbot-webhook-url="https://TU_WEBHOOK_URL/webhook-test/chatbot">
  ...
</body>
```

---

## 💬 Retroalimentación con SiteDots

**Extensión recomendada:**
👉 [SiteDots – Extensión Chrome](https://www.sitedots.com)

**Cómo usar:**

1. Instala SiteDots desde la Chrome Web Store.
2. Abre el sitio web local (`index.html`) y activa SiteDots.
3. Crea un proyecto llamado `sitio_web_roger`.
4. Invita a Roger con su correo para que comente sobre el sitio.
5. Todos los comentarios se guardan con contexto visual.

> Más detalles en: `project-context/feedback_sitedots.md`

## 📈 KPIs

Consulta los indicadores clave de desempeño en la hoja de Google Sheets
[KPIs\_IA\_Web](https://docs.google.com/spreadsheets/d/REPLACE_ME).

## 🖼️ Manejo de Imágenes

Para evitar problemas al subir archivos `.png`, describe cada imagen deseada con
un breve *prompt* en lenguaje natural. Genera la ilustración externamente y
vincúlala solo cuando sea necesario.

### Logo e imágenes finales

Guarda el logotipo definitivo en `docs/assets/` reemplazando `logo-placeholder.svg`.
Mientras se genera la versión final, crea un archivo `logo-final.md` en el mismo
directorio con una descripción en texto del diseño esperado. Cada imagen que se
agregue a `docs/assets/` debe ir acompañada de un archivo `.md` con el mismo
nombre base que explique en lenguaje natural su contenido y propósito.
