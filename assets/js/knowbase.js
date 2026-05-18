/* ============================================================
   w7-knowbase — shared client script
   - generates the sidebar navigation
   - bilingual HU/EN toggle (persisted to localStorage)
   - mobile sidebar menu
   No framework, no build step. All DOM built with createElement /
   textContent — never innerHTML with dynamic input.
   ============================================================ */
(function () {
  "use strict";

  var LANG_KEY = "knowbase-lang";

  /* ---- Navigation model ------------------------------------- */
  /* Paths are relative to the site root; resolved per page via data-base. */
  var NAV = [
    {
      label: { hu: "Áttekintés", en: "Overview" },
      items: [
        { id: "home", href: "index.html", label: { hu: "Kezdőlap", en: "Home" } },
        { id: "compare", href: "index.html#compare", label: { hu: "Összehasonlítás", en: "Compare" } }
      ]
    },
    {
      label: { hu: "Architektúrák", en: "Architectures" },
      items: [
        { id: "flat-rag", href: "architectures/flat-rag.html", dot: "flat", label: { hu: "Flat RAG", en: "Flat RAG" } },
        { id: "hierarchical-rag", href: "architectures/hierarchical-rag.html", dot: "hier", label: { hu: "Hierarchikus RAG", en: "Hierarchical RAG" } },
        { id: "graph-rag", href: "architectures/graph-rag.html", dot: "graph", label: { hu: "Graph RAG", en: "Graph RAG" } },
        { id: "agentic-rag", href: "architectures/agentic-rag.html", dot: "agent", label: { hu: "Ágensalapú RAG", en: "Agentic RAG" } },
        { id: "self-rag-crag", href: "architectures/self-rag-crag.html", dot: "self", label: { hu: "Self-RAG / CRAG", en: "Self-RAG / CRAG" } },
        { id: "adaptive-rag", href: "architectures/adaptive-rag.html", dot: "adapt", label: { hu: "Adaptív RAG", en: "Adaptive RAG" } },
        { id: "raptor", href: "architectures/raptor.html", dot: "raptor", label: { hu: "RAPTOR", en: "RAPTOR" } }
      ]
    },
    {
      label: { hu: "Referencia", en: "Reference" },
      items: [
        { id: "embedding-models", soon: true, label: { hu: "Embedding modellek", en: "Embedding Models" } },
        { id: "reranking", soon: true, label: { hu: "Újrarangsorolás", en: "Reranking" } },
        { id: "hybrid-search", soon: true, label: { hu: "Hibrid keresés", en: "Hybrid Search" } },
        { id: "evaluation", soon: true, label: { hu: "Kiértékelés", en: "Evaluation" } }
      ]
    }
  ];

  /* ---- Helpers ----------------------------------------------- */
  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  /* A bilingual label: <span lang="hu">…</span><span lang="en">…</span> */
  function bilingual(label) {
    var frag = document.createDocumentFragment();
    var hu = el("span");
    hu.setAttribute("lang", "hu");
    hu.textContent = label.hu;
    var en = el("span");
    en.setAttribute("lang", "en");
    en.textContent = label.en;
    frag.appendChild(hu);
    frag.appendChild(en);
    return frag;
  }

  /* ---- Sidebar generation ------------------------------------ */
  function buildSidebar(sidebar) {
    var base = sidebar.getAttribute("data-base") || "";
    var current = document.body.getAttribute("data-page") || "";

    /* Brand */
    var brand = el("a", "sidebar__brand");
    brand.href = base + "index.html";
    var mark = el("span", "sidebar__brand-mark");
    var w7 = el("span");
    w7.textContent = "w7";
    mark.appendChild(w7);
    mark.appendChild(document.createTextNode("-knowbase"));
    brand.appendChild(mark);
    sidebar.appendChild(brand);

    /* Close button (mobile) */
    var close = el("button", "sidebar__close");
    close.type = "button";
    close.setAttribute("aria-label", "Close navigation");
    close.appendChild(svgIcon("close"));
    close.addEventListener("click", closeNav);
    sidebar.appendChild(close);

    /* Nav groups */
    var nav = el("nav", "sidebar__nav");
    nav.setAttribute("aria-label", "Main");

    NAV.forEach(function (group) {
      var groupEl = el("div", "nav-group");
      var lbl = el("p", "nav-group__label");
      lbl.appendChild(bilingual(group.label));
      groupEl.appendChild(lbl);

      group.items.forEach(function (item) {
        var link;
        if (item.soon) {
          link = el("span", "nav-link");
          link.setAttribute("aria-disabled", "true");
          link.title = "Coming soon";
        } else {
          link = el("a", "nav-link");
          link.href = base + item.href;
          if (item.id === current) link.setAttribute("aria-current", "page");
        }
        if (item.dot) {
          link.appendChild(el("span", "nav-dot nav-dot--" + item.dot));
        }
        var text = el("span");
        text.appendChild(bilingual(item.label));
        link.appendChild(text);
        groupEl.appendChild(link);
      });

      nav.appendChild(groupEl);
    });
    sidebar.appendChild(nav);

    /* Footer */
    var footer = el("div", "sidebar__footer");
    footer.textContent = "v0.1.0 · 2026";
    sidebar.appendChild(footer);
  }

  /* ---- Minimal inline SVG icons ------------------------------ */
  function svgIcon(name) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    var paths = {
      menu: ["M3 6h18", "M3 12h18", "M3 18h18"],
      close: ["M6 6l12 12", "M18 6L6 18"]
    };
    (paths[name] || []).forEach(function (d) {
      var p = document.createElementNS(ns, "path");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  /* ---- Mobile menu ------------------------------------------- */
  function openNav() { document.body.classList.add("nav-open"); }
  function closeNav() { document.body.classList.remove("nav-open"); }

  /* ---- Language toggle --------------------------------------- */
  function applyLang(lang) {
    var isEn = lang === "en";
    document.body.classList.toggle("lang-en", isEn);
    document.documentElement.setAttribute("lang", isEn ? "en" : "hu");
    var buttons = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < buttons.length; i++) {
      var btnLang = buttons[i].getAttribute("data-lang-btn");
      buttons[i].setAttribute("aria-pressed", String(btnLang === lang));
    }
  }

  function readLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      return stored === "en" ? "en" : "hu"; /* validate untrusted input */
    } catch (e) {
      return "hu";
    }
  }

  function setLang(lang) {
    applyLang(lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---- Init -------------------------------------------------- */
  function init() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar) buildSidebar(sidebar);

    /* Mobile menu trigger + backdrop */
    var menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
      menuBtn.appendChild(svgIcon("menu"));
      menuBtn.addEventListener("click", openNav);
    }
    var backdrop = document.getElementById("navBackdrop");
    if (backdrop) backdrop.addEventListener("click", closeNav);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    /* Language toggle */
    applyLang(readLang());
    var langButtons = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", function () {
        setLang(this.getAttribute("data-lang-btn"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
