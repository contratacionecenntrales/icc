# ICC — Consultora de Inteligencia Artificial

Sitio web corporativo de ICC, consultora de Inteligencia Artificial para empresas en España.

## Stack

- HTML estático, sin paso de build.
- [Web Components](https://developer.mozilla.org/es/docs/Web/API/Web_components) nativos (`customElements`) para la cabecera, el pie de página y el bloque de llamada a la acción, definidos en `/components/` y cargados como módulos ES en cada página.
- [Tailwind CSS](https://tailwindcss.com/) vía CDN (`cdn.tailwindcss.com`) para todas las utilidades visuales. Sistema de diseño plano/suizo: sin sombras, sin bordes redondeados, paleta `neutral`.
- Tipografía [Inter](https://fonts.google.com/specimen/Inter) vía Google Fonts.

## Estructura

```
/                                  Home
/servicios/                        Índice de servicios
/servicios/consultoria-estrategica-ia/
/servicios/implementacion-agentes-ia/
/servicios/automatizacion-procesos-ia/
/servicios/formacion-ia-equipos/
/metodologia/                      Metodología de trabajo (4 etapas)
/casos-de-uso/                     Áreas de aplicación por función de negocio
/sobre/                            Compañía
/contacto/                         Contacto
/components/                       icc-header.js, icc-footer.js, icc-cta.js
/assets/                           favicon.svg
/sitemap.xml
/robots.txt
```

Cada página es HTML autocontenido (sin plantillas server-side): la cabecera y el pie de página se inyectan en tiempo de ejecución mediante los Web Components de `/components/`.

## Antes de desplegar

1. **Dominio**: todas las etiquetas `canonical`, Open Graph y el `sitemap.xml` usan el dominio placeholder `https://www.icc-ia.es`. Sustitúyelo por el dominio real con una búsqueda y reemplazo global antes de publicar.
2. **Correo de contacto**: los enlaces `mailto:` usan `hola@icc-ia.es`. Sustitúyelo por la dirección real.
3. **Rutas absolutas**: la navegación usa rutas absolutas (`/servicios/...`). Si el sitio se despliega bajo un subdirectorio (no en la raíz del dominio), ajusta las rutas en `/components/icc-header.js`, `/components/icc-footer.js` y los `href` de cada página.

## Desarrollo local

No requiere instalación. Sirve el directorio con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```
