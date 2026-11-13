(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation?.classList.toggle('is-open', !isOpen);
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation');
    });
  });

  const counters = [...document.querySelectorAll('[data-count]')];
  const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });
    counters.forEach((counter) => observer.observe(counter));
  }

  document.querySelectorAll('[data-inquiry-form]').forEach((form) => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get('category');
    const requestedProduct = params.get('product');
    const subjectField = form.querySelector('[name="subject"]');
    const messageField = form.querySelector('[name="message"]');
    if (requestedCategory && subjectField && [...subjectField.options].some((option) => option.value === requestedCategory || option.text === requestedCategory)) {
      subjectField.value = requestedCategory;
    }
    if (requestedProduct && messageField) {
      messageField.value = `I am interested in ${requestedProduct}. Please share availability and quotation details.`;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const submitButton = form.querySelector('[type="submit"]');
      const status = form.querySelector('[data-form-status]');
      if (!submitButton || !status) return;

      const originalLabel = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      status.classList.remove('is-error');
      status.textContent = '';

      window.setTimeout(() => {
        status.textContent = 'Thank you. Your inquiry has been submitted successfully. Our team typically responds within 24–48 hours.';
        submitButton.disabled = false;
        submitButton.innerHTML = originalLabel;
        form.reset();
      }, 650);
    });
  });
})();
