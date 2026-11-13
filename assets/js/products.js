(() => {
  const catalog = [
    { name: 'Lumefantrine', category: 'APIs', group: 'Anti-Malarial' },
    { name: 'Artemether', category: 'APIs', group: 'Anti-Malarial' },
    { name: 'Artesunate', category: 'APIs', group: 'Anti-Malarial' },
    { name: 'Levocloperastine Fendizoate', category: 'APIs', group: 'Anti-Tussive' },
    { name: 'Levodropropizine', category: 'APIs', group: 'Anti-Tussive' },
    { name: 'Dextromethorphan', category: 'APIs', group: 'Anti-Tussive' },
    { name: 'Azithromycin', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Ofloxacin', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Amoxicillin', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Clarithromycin', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Doxycycline', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Levofloxacin', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Erythromycin Ethyl Succinate', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Tetracycline', category: 'APIs', group: 'Anti-Biotics' },
    { name: 'Ketoconazole', category: 'APIs', group: 'Anti-Fungal' },
    { name: 'Fluconazole', category: 'APIs', group: 'Anti-Fungal' },
    { name: 'Luliconazole', category: 'APIs', group: 'Anti-Fungal' },
    { name: 'Nystatin', category: 'APIs', group: 'Anti-Fungal' },
    { name: 'Albendazole', category: 'APIs', group: 'Anthelmintics' },
    { name: 'Fenbendazole', category: 'APIs', group: 'Anthelmintics' },
    { name: 'Ivermectin', category: 'APIs', group: 'Anthelmintics' },
    { name: 'Doxycycline Hyclate', category: 'APIs', group: 'Tetracyclines' },
    { name: 'Tetracycline HCl', category: 'APIs', group: 'Tetracyclines' },
    { name: 'Cetirizine HCl', category: 'APIs', group: 'Anti-Histamines' },
    { name: 'Levocetirizine', category: 'APIs', group: 'Anti-Histamines' },
    { name: 'Metronidazole', category: 'APIs', group: 'Anti-Infectives' },
    { name: 'Metronidazole Benzoate', category: 'APIs', group: 'Anti-Infectives' },
    { name: 'Atorvastatin Calcium', category: 'APIs', group: 'Anti-Hyperlipidemic' },
    { name: 'Rosuvastatin Calcium', category: 'APIs', group: 'Anti-Hyperlipidemic' },
    { name: 'Nifedipine', category: 'APIs', group: 'Anti-Hypertensive' },
    { name: 'Amlodipine Besylate', category: 'APIs', group: 'Anti-Hypertensive' },
    { name: 'Losartan Potassium', category: 'APIs', group: 'Anti-Hypertensive' },
    { name: 'Cefuroxime Axetil', category: 'APIs', group: 'Cephalosporins' },
    { name: 'Cefixime Trihydrate', category: 'APIs', group: 'Cephalosporins' },
    { name: 'Cefpodoxime Proxetil', category: 'APIs', group: 'Cephalosporins' },
    { name: 'Paracetamol', category: 'APIs', group: 'Analgesic' },
    { name: 'Mefenamic Acid', category: 'APIs', group: 'Analgesic' },
    { name: 'Ambroxol HCl', category: 'APIs', group: 'Mucolytic Agent' },
    { name: 'Bromhexine HCl', category: 'APIs', group: 'Mucolytic Agent' },
    { name: 'Omeprazole', category: 'APIs', group: 'Anti-Ulceratives' },
    { name: 'Pantoprazole', category: 'APIs', group: 'Anti-Ulceratives' },
    { name: 'Abacavir', category: 'APIs', group: 'Anti-Retroviral' },
    { name: 'Dolutegravir', category: 'APIs', group: 'Anti-Retroviral' },
    { name: 'Phenylephrine', category: 'APIs', group: 'Decongestant' },
    { name: 'Gabapentine', category: 'APIs', group: 'Anti-Convulsant' },
    { name: 'Pregabalin', category: 'APIs', group: 'Anti-Convulsant' },
    { name: 'Guaifenesin', category: 'APIs', group: 'Expectorant' },
    { name: 'Terbutaline Sulphate', category: 'APIs', group: 'Anti-Asthmatic' },
    { name: 'Lactulose', category: 'APIs', group: 'Osmotic Laxative' },
    { name: 'Sucralfate', category: 'APIs', group: 'Anti-Ulcer' },
    { name: 'Erythromycin Stearate', category: 'APIs', group: 'Anti-Bacterial' },
    { name: 'Citicoline', category: 'APIs', group: 'Neuroprotective' },
    { name: 'Tapentadol HCl', category: 'APIs', group: 'Opioid Analgesics' },
    { name: 'UDCA', category: 'APIs', group: 'Hepatic Agents' },
    { name: 'Naltrexone HCl', category: 'APIs', group: 'Opioid Antagonists' },
    { name: 'Finasteride', category: 'APIs', group: 'Anti-Androgens' },
    { name: 'Magaldrate', category: 'APIs', group: 'Antacids' },
    { name: 'Diclofenac Sodium', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Diclofenac Potassium', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Montelukast Sodium', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Etoricoxib', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Aceclofenac', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Ibuprofen', category: 'APIs', group: 'Anti-Inflammatory' },
    { name: 'Testosterone', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Testosterone Enanthate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Testosterone Propionate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Testosterone Cypionate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Nandrolone', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Nandrolone Decanoate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Nandrolone Phenylpropionate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Norethisterone', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Norethisterone Enanthate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'Norethisterone Acetate', category: 'APIs', group: 'Hormones APIs' },
    { name: 'PVP K30', category: 'Excipients', group: 'Excipients' },
    { name: 'HPMC E5/E15/K100M', category: 'Excipients', group: 'Excipients' },
    { name: 'MCC 101/102', category: 'Excipients', group: 'Excipients' },
    { name: 'Sucralose', category: 'Sweeteners', group: 'Sweeteners' },
    { name: 'Neotame', category: 'Sweeteners', group: 'Sweeteners' },
    { name: 'Aspartame', category: 'Sweeteners', group: 'Sweeteners' },
    { name: 'Acesulfame K', category: 'Sweeteners', group: 'Sweeteners' },
    { name: 'Beta-Carotene 10% DG', category: 'Beta-Carotene', group: 'Beta-Carotene' },
    { name: 'Beta-Carotene 20% DC/AF', category: 'Beta-Carotene', group: 'Beta-Carotene' },
    { name: 'Beta-Carotene 30%', category: 'Beta-Carotene', group: 'Beta-Carotene' },
    { name: 'Lycopene 10% DC/AF', category: 'Lycopene', group: 'Lycopene' },
    { name: 'Lycopene 10% LF Liquid', category: 'Lycopene', group: 'Lycopene' },
    { name: 'Lycopene 10%', category: 'Lycopene', group: 'Lycopene' },
    { name: 'Vitamin A Acetate', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Vitamin A Palmitate', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Thiamine Mononitrate (B1 Mono)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Thiamine HCl (B1 HCl)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Riboflavin (B2)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Niacinamide (B3)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Pantothenic Acid (B5)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Vitamin E Acetate', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Pyridoxine HCl (B6)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Biotin (B7)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Folic Acid (B9)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Cyanocobalamin (B12)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Methylcobalamin (B12)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Ascorbic Acid (C)', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Vitamin D2/D3', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Vitamin K', category: 'Vitamins', group: 'Vitamins' },
    { name: 'Acetyl L-Carnitine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Lysine Acetate', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Glutamic Acid', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Glutamine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Glutathione Reduced', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Cysteine HCl Monohydrate', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'N-Acetyl-L-Cysteine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'N-Acetyl-L-Tyrosine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Arginine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Tartrate', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Glycine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Leucine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Carnitine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Carnosine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'L-Theanine', category: 'Amino Acids', group: 'Amino Acids' },
    { name: 'Citric Acid Anhydrous', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Citric Acid Monohydrate', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Isopropyl Alcohol', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Phosphoric Acid', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Acetone', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Hydrochloric Acid', category: 'Common Chemicals', group: 'Common Chemicals' },
    { name: 'Sulphuric Acid', category: 'Common Chemicals', group: 'Common Chemicals' },
  ];

  const pageSize = 12;
  const searchInput = document.querySelector('#product-search');
  const sortSelect = document.querySelector('#product-sort');
  const categoryFilters = document.querySelector('#category-filters');
  const productGrid = document.querySelector('#product-grid');
  const resultCount = document.querySelector('#results-count');
  const pagination = document.querySelector('#pagination');
  const emptyResults = document.querySelector('#empty-results');
  const resetButton = document.querySelector('#reset-filters');
  if (!productGrid || !categoryFilters) return;

  const categories = [...new Set(catalog.map((product) => product.category))];
  let currentPage = 1;

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);

  categories.forEach((category) => {
    const count = catalog.filter((product) => product.category === category).length;
    const label = document.createElement('label');
    label.className = 'filter-option';
    label.innerHTML = `<input type="checkbox" value="${escapeHTML(category)}"><span>${escapeHTML(category)} <small>(${count})</small></span>`;
    label.querySelector('input').addEventListener('change', () => {
      currentPage = 1;
      document.querySelectorAll('[data-category-link]').forEach((tile) => tile.classList.remove('is-active'));
      render();
    });
    categoryFilters.append(label);
  });

  const selectedCategories = () => [...categoryFilters.querySelectorAll('input:checked')].map((input) => input.value);
  const getFilteredProducts = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const selected = selectedCategories();
    let results = catalog.filter((product) => {
      const matchesCategory = selected.length === 0 || selected.includes(product.category);
      const matchesQuery = !query || `${product.name} ${product.category} ${product.group}`.toLocaleLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    if (sortSelect.value === 'name') results = [...results].sort((a, b) => a.name.localeCompare(b.name));
    if (sortSelect.value === 'name-desc') results = [...results].sort((a, b) => b.name.localeCompare(a.name));
    return results;
  };

  const renderPagination = (totalPages) => {
    pagination.replaceChildren();
    if (totalPages <= 1) return;
    const addButton = (label, page, disabled = false, current = false) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.disabled = disabled;
      if (current) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => {
        currentPage = page;
        render();
        document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      pagination.append(button);
    };
    addButton('Previous', currentPage - 1, currentPage === 1);
    const first = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
    const last = Math.min(totalPages, first + 4);
    for (let page = first; page <= last; page += 1) addButton(String(page), page, false, page === currentPage);
    addButton('Next', currentPage + 1, currentPage === totalPages);
  };

  const render = () => {
    const filtered = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const startIndex = (currentPage - 1) * pageSize;
    const visible = filtered.slice(startIndex, startIndex + pageSize);
    resultCount.textContent = filtered.length
      ? `Showing ${startIndex + 1}–${startIndex + visible.length} of ${filtered.length} products`
      : 'Showing 0 products';
    emptyResults.hidden = filtered.length > 0;
    productGrid.hidden = filtered.length === 0;
    productGrid.innerHTML = visible.map((product) => `
      <article class="product-card">
        <div class="product-card-main">
          <div class="product-card-meta"><span class="product-category">${escapeHTML(product.category)}</span>${product.group !== product.category ? `<span class="product-subcategory">${escapeHTML(product.group)}</span>` : ''}</div>
          <h3>${escapeHTML(product.name)}</h3>
        </div>
      </article>`).join('');
    renderPagination(totalPages);
  };

  document.querySelectorAll('[data-category-link]').forEach((tile) => {
    tile.addEventListener('click', () => {
      const category = tile.dataset.categoryLink;
      categoryFilters.querySelectorAll('input').forEach((input) => { input.checked = input.value === category; });
      currentPage = 1;
      document.querySelectorAll('[data-category-link]').forEach((item) => item.classList.toggle('is-active', item === tile));
      render();
    });
  });
  searchInput.addEventListener('input', () => { currentPage = 1; render(); });
  sortSelect.addEventListener('change', () => { currentPage = 1; render(); });
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'catalog';
    categoryFilters.querySelectorAll('input').forEach((input) => { input.checked = false; });
    document.querySelectorAll('[data-category-link]').forEach((tile) => tile.classList.remove('is-active'));
    currentPage = 1;
    render();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  render();
})();
