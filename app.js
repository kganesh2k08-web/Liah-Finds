(() => {
  "use strict";

  const CATEGORIES = ["All", "Fitness", "Tech Gadgets", "Outfits", "Trending"];
  let activeCategory = "All";
  let searchQuery = "";
  let highlightedCode = "";

  const elements = {
    brandName: document.getElementById("brand-name"),
    brandHandle: document.getElementById("brand-handle"),
    brandTagline: document.getElementById("brand-tagline"),
    socialInstagram: document.getElementById("social-instagram"),
    socialYoutube: document.getElementById("social-youtube"),
    socialPinterest: document.getElementById("social-pinterest"),
    socialFacebook: document.getElementById("social-facebook"),
    searchInput: document.getElementById("search-input"),
    clearSearch: document.getElementById("clear-search"),
    categoryChips: document.getElementById("category-chips"),
    resultsCount: document.getElementById("results-count"),
    productGrid: document.getElementById("product-grid"),
    emptyState: document.getElementById("empty-state"),
    resetFilters: document.getElementById("reset-filters")
  };

  function isSafeHttpUrl(rawUrl) {
    if (typeof rawUrl !== "string" || !rawUrl.trim()) return false;
    try {
      const parsed = new URL(rawUrl.trim());
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch {
      return false;
    }
  }

  function isSafeImageSrc(rawSrc) {
    if (typeof rawSrc !== "string" || !rawSrc.trim()) return false;
    const trimmed = rawSrc.trim();
    if (/^images\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|webp|svg)$/.test(trimmed)) {
      return true;
    }
    return isSafeHttpUrl(trimmed);
  }

  function buildAffiliateUrl(rawUrl) {
    if (!isSafeHttpUrl(rawUrl)) return "#";
    const parsed = new URL(rawUrl.trim());
    const tag = (SITE_CONFIG.amazonTag || "").trim();
    const isAmazonHost =
      parsed.hostname === "amazon.in" ||
      parsed.hostname.endsWith(".amazon.in") ||
      parsed.hostname === "amazon.com" ||
      parsed.hostname.endsWith(".amazon.com");

    if (isAmazonHost && tag && tag !== "YOUR-TAG-21" && !parsed.searchParams.has("tag")) {
      parsed.searchParams.set("tag", tag);
    }
    return parsed.toString();
  }

  function applySiteConfig() {
    if (elements.brandName) elements.brandName.textContent = SITE_CONFIG.brandName;
    if (elements.brandHandle) elements.brandHandle.textContent = SITE_CONFIG.handle;
    if (elements.brandTagline) elements.brandTagline.textContent = SITE_CONFIG.tagline;

    const socialMap = [
      [elements.socialInstagram, SITE_CONFIG.socials.instagram],
      [elements.socialYoutube, SITE_CONFIG.socials.youtube],
      [elements.socialPinterest, SITE_CONFIG.socials.pinterest],
      [elements.socialFacebook, SITE_CONFIG.socials.facebook]
    ];

    for (const [el, url] of socialMap) {
      if (el && isSafeHttpUrl(url)) {
        el.setAttribute("href", url);
      }
    }
  }

  function renderCategoryChips() {
    elements.categoryChips.textContent = "";
    for (const cat of CATEGORIES) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(cat === activeCategory));
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderCategoryChips();
        renderProducts();
      });
      elements.categoryChips.appendChild(btn);
    }
  }

  function getFilteredProducts() {
    const cleanQuery = searchQuery.trim().toLowerCase().replace(/^#/, "");
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!cleanQuery) return true;

      const haystack = [
        item.code,
        item.title,
        item.category,
        item.badge,
        item.hook,
        item.keywords
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(cleanQuery);
    });
  }

  function createProductCard(item) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.id = `find-${item.code}`;
    if (highlightedCode === item.code) {
      card.classList.add("is-highlighted");
    }

    const visual = document.createElement("div");
    visual.className = "card-visual";

    if (isSafeImageSrc(item.imageUrl)) {
      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.title;
      img.loading = "lazy";
      visual.appendChild(img);
    } else {
      const codePill = document.createElement("span");
      codePill.className = "find-code";
      codePill.textContent = `#${item.code}`;

      const badge = document.createElement("span");
      badge.className = "category-badge";
      badge.textContent = item.badge || item.category;

      visual.appendChild(codePill);
      visual.appendChild(badge);
    }

    const metaRow = document.createElement("div");
    metaRow.className = "card-meta-row";

    const catLabel = document.createElement("span");
    catLabel.className = "category-badge";
    catLabel.textContent = item.category;

    const codeText = document.createElement("span");
    codeText.className = "find-code";
    codeText.textContent = `Find #${item.code}`;

    metaRow.appendChild(codeText);
    metaRow.appendChild(catLabel);

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = item.title;

    const hook = document.createElement("p");
    hook.className = "card-hook";
    hook.textContent = item.hook;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const buyLink = document.createElement("a");
    buyLink.className = "btn-primary";
    buyLink.href = buildAffiliateUrl(item.affiliateUrl);
    buyLink.target = "_blank";
    buyLink.rel = "noopener noreferrer sponsored";
    buyLink.textContent = "Check on Amazon";

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "btn-secondary";
    copyBtn.textContent = "Share";
    copyBtn.setAttribute("aria-label", `Copy direct link to Find #${item.code}`);
    copyBtn.addEventListener("click", async () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?find=${item.code}`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Share";
        }, 1600);
      } catch {
        copyBtn.textContent = `#${item.code}`;
      }
    });

    actions.appendChild(buyLink);
    actions.appendChild(copyBtn);

    card.appendChild(visual);
    card.appendChild(metaRow);
    card.appendChild(title);
    card.appendChild(hook);
    card.appendChild(actions);

    return card;
  }

  function renderProducts() {
    const filtered = getFilteredProducts();
    elements.productGrid.textContent = "";

    const total = filtered.length;
    elements.resultsCount.textContent = `Showing ${total} ${total === 1 ? "find" : "finds"}${
      activeCategory !== "All" ? ` in ${activeCategory}` : ""
    }`;

    if (total === 0) {
      elements.emptyState.hidden = false;
      return;
    }

    elements.emptyState.hidden = true;
    for (const item of filtered) {
      elements.productGrid.appendChild(createProductCard(item));
    }
  }

  function handleDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const findParam = (params.get("find") || "").replace(/^#/, "").trim();
    if (findParam) {
      highlightedCode = findParam;
      searchQuery = findParam;
      elements.searchInput.value = findParam;
      elements.clearSearch.hidden = false;
    }
  }

  function bindEvents() {
    elements.searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      highlightedCode = "";
      elements.clearSearch.hidden = !searchQuery.trim();
      renderProducts();
    });

    elements.clearSearch.addEventListener("click", () => {
      searchQuery = "";
      highlightedCode = "";
      elements.searchInput.value = "";
      elements.clearSearch.hidden = true;
      renderProducts();
      elements.searchInput.focus();
    });

    elements.resetFilters.addEventListener("click", () => {
      activeCategory = "All";
      searchQuery = "";
      highlightedCode = "";
      elements.searchInput.value = "";
      elements.clearSearch.hidden = true;
      renderCategoryChips();
      renderProducts();
    });
  }

  applySiteConfig();
  handleDeepLink();
  renderCategoryChips();
  renderProducts();
  bindEvents();
})();
