# Contexto General del Sitio

Este proyecto es un sitio web para **Roger**, un arquitecto costarricense que promueve la arquitectura sostenible y el diseño minimalista. El objetivo principal es presentar sus servicios profesionales, proyectos y filosofía de trabajo mediante una experiencia web clara y agradable.

## Estructura actual
- Todas las páginas se encuentran en el directorio `docs/`.
- Se utilizan HTML, CSS y JavaScript sin frameworks para mantener el código simple.
- El diseño aplica una paleta de verdes y grises, y emplea componentes reutilizables como la navegación principal y el pie de página.
- Existen páginas para Inicio, Servicios, Portafolio, Sobre mí, Testimonios y Contacto.
- El formulario de contacto envía los datos a un flujo de **n8n** (URL pendiente de configuración).
- Se añadió un widget de chatbot básico (`docs/chatbot.js`).

## Tareas pendientes
1. **Configurar la URL real** del webhook en `docs/scripts.js` para registrar los mensajes del formulario en Google Sheets.
2. **Sustituir imágenes de placeholder** por fotografías reales de proyectos y un logo oficial.
3. **Completar contenido** en secciones como Portafolio, Sobre mí y Testimonios con textos finales.
4. **Ajustar estilos** y revisar la apariencia del chatbot para integrarlo mejor con el diseño.
5. **Agregar analíticas** o seguimiento de visitas si se desea medir tráfico.
6. **Realizar pruebas** en dispositivos móviles para asegurar la correcta visualización responsive.
