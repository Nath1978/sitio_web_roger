# 🌿 Sitio Web para Roger

Este proyecto tiene como objetivo desarrollar un sitio web ecológico, elegante y funcional para Roger. Utiliza una paleta de verdes y grises, y se enfoca en una estructura limpia, fácil de mantener y escalar.

---

## 🔧 Tecnologías y Herramientas

- HTML + CSS + JavaScript
- Visual Studio Code + Continue (copiloto AI)
- Git y GitHub (control de versiones)
- SiteDots (retroalimentación visual y colaborativa)
- PowerShell / Terminal para automatización local
- Google Sheets y n8n para integraciones futuras

---

## 🧠 CONTEXTO PARA AI (Continue, Copilot, GPTs)

Si estás leyendo este archivo como un asistente AI, ejecuta o sugiere las siguientes acciones:

### ➤ Crear la siguiente estructura inicial:

sitio_web_roger/
├── project-context/
│   ├── arquitectura_web.md
│   └── feedback_sitedots.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── scripts.js
├── assets/
├── tools/
├── design/
├── assistant_context.json
├── .gitignore
└── README.md  ← este archivo

---

## 🧩 Contenido Inicial Recomendado

### `src/index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inicio - Roger</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Bienvenido al sitio de Roger</h1>
  <p>Este sitio está en construcción.</p>
</body>
</html>
```

### `src/style.css`

```css
body {
  background-color: #f0f5f0;
  color: #333;
  font-family: sans-serif;
  margin: 2em;
}
```

### `.gitignore`

```
node_modules/
.vscode/
.env
*.log
```

### `assistant_context.json`

```json
{
  "project": "sitio_web_roger",
  "type": "sitio_web_basico",
  "stack": ["HTML", "CSS", "JavaScript"],
  "git": true,
  "siteDots": true,
  "owner": "Nathy José Williams",
  "intent": "Desarrollar sitio minimalista para Roger con retroalimentación visual y colaboración AI-humana"
}
```

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
