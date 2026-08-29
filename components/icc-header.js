const SERVICES = [
  { slug: 'consultoria-estrategica-ia', label: 'Consultoría estratégica de IA' },
  { slug: 'implementacion-agentes-ia', label: 'Implementación de agentes de IA' },
  { slug: 'automatizacion-procesos-ia', label: 'Automatización de procesos con IA' },
  { slug: 'formacion-ia-equipos', label: 'Formación de equipos en IA' },
];

class IccHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';

    const menuItems = SERVICES.map((s) => `
      <a href="/servicios/${s.slug}/"
         class="block px-4 py-3 border-b border-neutral-200 last:border-b-0 text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150 ${active === s.slug ? 'bg-neutral-900 text-white' : ''}">
        ${s.label}
      </a>`).join('');

    const mobileItems = SERVICES.map((s) => `
      <a href="/servicios/${s.slug}/"
         class="px-6 py-3 border-b border-neutral-200 text-sm text-neutral-900 ${active === s.slug ? 'bg-neutral-900 text-white' : ''}">
        ${s.label}
      </a>`).join('');

    this.innerHTML = `
      <header class="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="text-lg font-bold tracking-tight text-neutral-900">ICC</a>

            <nav class="hidden md:flex items-center gap-8 text-sm">
              <div class="relative group h-16 flex items-center">
                <button type="button"
                        class="flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 transition-colors duration-150 ${active === 'servicios' ? 'font-semibold' : ''}"
                        aria-haspopup="true">
                  Servicios
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="mt-px">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
                <div class="absolute left-0 top-full w-80 border border-neutral-200 bg-white hidden group-hover:block group-focus-within:block">
                  ${menuItems}
                  <a href="/servicios/"
                     class="block px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
                    Ver todos los servicios →
                  </a>
                </div>
              </div>
              <a href="/metodologia/" class="text-neutral-900 hover:text-neutral-600 transition-colors duration-150 ${active === 'metodologia' ? 'font-semibold' : ''}">Metodología</a>
              <a href="/casos-de-uso/" class="text-neutral-900 hover:text-neutral-600 transition-colors duration-150 ${active === 'casos-de-uso' ? 'font-semibold' : ''}">Casos de uso</a>
              <a href="/sobre/" class="text-neutral-900 hover:text-neutral-600 transition-colors duration-150 ${active === 'sobre' ? 'font-semibold' : ''}">Compañía</a>
              <a href="/contacto/"
                 class="border border-neutral-900 text-neutral-900 px-4 py-2 rounded-none hover:bg-neutral-900 hover:text-white transition-colors duration-150">
                Solicitar diagnóstico
              </a>
            </nav>

            <button id="icc-menu-toggle" type="button" class="md:hidden text-neutral-900" aria-label="Abrir menú" aria-expanded="false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </button>
          </div>
        </div>

        <div id="icc-mobile-menu" class="hidden md:hidden border-t border-neutral-200">
          <nav class="flex flex-col">
            <a href="/servicios/" class="px-6 py-3 border-b border-neutral-200 text-sm font-semibold text-neutral-900">Servicios</a>
            ${mobileItems}
            <a href="/metodologia/" class="px-6 py-3 border-b border-neutral-200 text-sm text-neutral-900">Metodología</a>
            <a href="/casos-de-uso/" class="px-6 py-3 border-b border-neutral-200 text-sm text-neutral-900">Casos de uso</a>
            <a href="/sobre/" class="px-6 py-3 border-b border-neutral-200 text-sm text-neutral-900">Compañía</a>
            <a href="/contacto/" class="px-6 py-3 text-sm font-medium text-neutral-900">Solicitar diagnóstico</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = this.querySelector('#icc-menu-toggle');
    const menu = this.querySelector('#icc-mobile-menu');
    toggle.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!isHidden));
    });
  }
}

customElements.define('icc-header', IccHeader);
