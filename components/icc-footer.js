const SERVICES = [
  { slug: 'consultoria-estrategica-ia', label: 'Consultoría estratégica de IA' },
  { slug: 'implementacion-agentes-ia', label: 'Implementación de agentes de IA' },
  { slug: 'automatizacion-procesos-ia', label: 'Automatización de procesos con IA' },
  { slug: 'formacion-ia-equipos', label: 'Formación de equipos en IA' },
];

class IccFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    const serviceLinks = SERVICES.map((s) => `
      <li><a href="/servicios/${s.slug}/" class="hover:text-neutral-900 transition-colors duration-150">${s.label}</a></li>
    `).join('');

    this.innerHTML = `
      <footer class="border-t border-neutral-200 bg-white">
        <div class="max-w-6xl mx-auto px-6 py-16">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div class="text-lg font-bold tracking-tight text-neutral-900">ICC</div>
              <p class="mt-3 text-sm text-neutral-600 leading-relaxed">
                Consultora de Inteligencia Artificial para empresas. Diagnóstico, implementación y control de agentes de IA en producción.
              </p>
            </div>

            <div>
              <div class="text-xs font-semibold uppercase tracking-wider text-neutral-500">Servicios</div>
              <ul class="mt-4 space-y-3 text-sm text-neutral-600">
                ${serviceLinks}
              </ul>
            </div>

            <div>
              <div class="text-xs font-semibold uppercase tracking-wider text-neutral-500">Compañía</div>
              <ul class="mt-4 space-y-3 text-sm text-neutral-600">
                <li><a href="/metodologia/" class="hover:text-neutral-900 transition-colors duration-150">Metodología</a></li>
                <li><a href="/casos-de-uso/" class="hover:text-neutral-900 transition-colors duration-150">Casos de uso</a></li>
                <li><a href="/sobre/" class="hover:text-neutral-900 transition-colors duration-150">Sobre ICC</a></li>
                <li><a href="/contacto/" class="hover:text-neutral-900 transition-colors duration-150">Contacto</a></li>
              </ul>
            </div>

            <div>
              <div class="text-xs font-semibold uppercase tracking-wider text-neutral-500">Contacto</div>
              <ul class="mt-4 space-y-3 text-sm text-neutral-600">
                <li><a href="mailto:hola@icc-ia.es" class="hover:text-neutral-900 transition-colors duration-150">hola@icc-ia.es</a></li>
                <li>España — servicio nacional</li>
              </ul>
            </div>
          </div>

          <div class="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p class="text-xs text-neutral-500">© ${year} ICC. Todos los derechos reservados.</p>
            <p class="text-xs text-neutral-500">Consultora de Inteligencia Artificial — España.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('icc-footer', IccFooter);
