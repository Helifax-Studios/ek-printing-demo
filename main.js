// Mobile nav + footer year + gallery filter + demo form
(() => {
  const navBtn = document.querySelector("[data-navbtn]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelectorAll("[data-year]");

  year.forEach(el => (el.textContent = new Date().getFullYear()));

  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-label", nav.classList.contains("is-open") ? "Close menu" : "Open menu");
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => nav.classList.remove("is-open"));
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") nav.classList.remove("is-open");
    });
  }

  // Work page filtering
  const chips = document.querySelectorAll("[data-filter]");
  const grid = document.querySelector("[data-grid]");
  if (chips.length && grid) {
    const items = Array.from(grid.children);

    const setActive = (btn) => {
      chips.forEach(c => c.classList.remove("is-active"));
      btn.classList.add("is-active");
    };

    chips.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-filter");
        setActive(btn);

        items.forEach(card => {
          const cardType = card.getAttribute("data-type");
          const show = type === "all" || cardType === type;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  // Demo quote form (front-end only)
  const form = document.getElementById("quoteForm");
  const msg = document.getElementById("formMsg");
  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent = "Demo form: message sent (not really). Replace with backend/email integration.";
      form.reset();
    });
  }
})();
