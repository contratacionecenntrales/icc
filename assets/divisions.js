(function () {
  function setExpanded(button, panel, expanded) {
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    panel.style.maxHeight = expanded ? panel.scrollHeight + 'px' : null;
  }

  function wireToggle(buttonSelector, panelSelector) {
    document.querySelectorAll(buttonSelector).forEach(function (button) {
      var panel = button.closest('.faq-item, .division-card') ? button.closest('.faq-item, .division-card').querySelector(panelSelector) : null;
      if (!panel) return;
      button.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', function () {
        var isOpen = button.getAttribute('aria-expanded') === 'true';
        setExpanded(button, panel, !isOpen);
      });
    });
  }

  wireToggle('.faq-question', '.faq-answer');
  wireToggle('.division-toggle', '.division-highlights');

  window.addEventListener('resize', function () {
    document.querySelectorAll('[aria-expanded="true"]').forEach(function (button) {
      var panel = button.closest('.faq-item, .division-card');
      panel = panel ? panel.querySelector('.faq-answer, .division-highlights') : null;
      if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
})();
