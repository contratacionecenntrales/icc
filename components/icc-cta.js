class IccCta extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute('heading') || '';
    const body = this.getAttribute('body') || '';
    const primaryLabel = this.getAttribute('primary-label') || 'Solicitar reunión';
    const primaryHref = this.getAttribute('primary-href') || 'mailto:hola@icc-ia.es';
    const secondaryLabel = this.getAttribute('secondary-label') || 'Escribir por correo';
    const secondaryHref = this.getAttribute('secondary-href') || 'mailto:hola@icc-ia.es';

    this.innerHTML = `
      <section id="contacto" class="bg-neutral-900 text-white">
        <div class="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div class="max-w-2xl">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight">${heading}</h2>
            <p class="mt-4 text-neutral-300 leading-relaxed">${body}</p>
            <div class="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="${primaryHref}"
                 class="inline-flex items-center justify-center bg-white text-neutral-900 rounded-none px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors duration-150">
                ${primaryLabel}
              </a>
              <a href="${secondaryHref}"
                 class="inline-flex items-center justify-center border border-white text-white rounded-none px-6 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900 transition-colors duration-150">
                ${secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('icc-cta', IccCta);
