(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var LANGS = ["en", "ua", "ru"];

  var translations = {
    en: {
      "meta.title": "Hlib Konberh — Web Developer",
      "meta.description": "Web developer building clean, minimal websites for people who want their online presence to look intentional.",
      "name.full": "Hlib Konberh",
      "name.portraitAlt": "Portrait of Hlib Konberh",
      "about.portraitLabel": "About Hlib Konberh",
      "nav.menuToggle": "Toggle menu",
      "nav.langSwitcher": "Language",
      "nav.about": "About",
      "nav.build": "Build",
      "nav.process": "Process",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",
      "hero.eyebrow": "Hlib Konberh — Web Developer",
      "hero.title": "I turn vague ideas into websites that look <em>suspiciously</em> more expensive than they were.",
      "hero.sub": "Web developer building clean, minimal websites for people who want their online presence to look intentional.",
      "hero.viewWork": "View work",
      "hero.status": "Open to projects of any complexity — from personal portfolios to polished business websites.",
      "panel.availability": "availability",
      "panel.open": "open",
      "panel.stack": "stack",
      "panel.aesthetic": "aesthetic",
      "panel.minimal": "minimal",
      "panel.templates": "templates_used",
      "panel.taste": "taste",
      "panel.confidence": "confidence",
      "panel.questionable": "steady",
      "about.title": "Not an agency. Not a guru. Just the person who makes the page make sense.",
      "about.p1": "I'm Hlib Konberh — a web developer building clean, minimal websites for people, projects, and businesses that need a stronger digital presence.",
      "about.p2": "I focus on structure, visual clarity, responsive design, and sharp presentation — the details that make a website feel intentional instead of accidental.",
      "about.role": "Web Developer",
      "about.credential": "Honorary Citizen of Horishni Plavni, 2009.",
      "pill.minimal": "Minimal Websites",
      "pill.landing": "Landing Pages",
      "pill.portfolio": "Personal Portfolios",
      "pill.structure": "Clean Structure",
      "pill.copy": "Sharp Copy",
      "pill.layout": "Responsive Layout",
      "build.title": "What I build",
      "build.sub": "Websites with structure, taste, and a clear purpose.",
      "build.card1.title": "Landing Pages",
      "build.card1.desc": "For services, launches, personal brands, and projects that need one focused page with a clear message.",
      "build.card2.title": "Personal Portfolios",
      "build.card2.desc": "For students, freelancers, creators, and professionals who want their online presence to look intentional.",
      "build.card3.title": "Business Websites",
      "build.card3.desc": "Clean, responsive websites for services, local businesses, personal brands, and early-stage projects.",
      "build.card4.title": "Web Concepts",
      "build.card4.desc": "Visual concepts and prototypes for ideas that need to be shaped, tested, and presented clearly.",
      "build.footnote": "Every build starts with structure, clarity, responsive layout, and attention to the details people usually notice too late.",
      "process.title": "How I work",
      "process.sub": "A clear path from early idea to a finished, considered page.",
      "process.step1.title": "Define the direction",
      "process.step1.desc": "You share the concept and goals. I help shape them into a focused direction for the page.",
      "process.step2.title": "Structure the page",
      "process.step2.desc": "Sections, copy, hierarchy, and calls to action are organized before visual refinement begins.",
      "process.step3.title": "Build the website",
      "process.step3.desc": "A clean, responsive website built to work consistently on desktop and mobile.",
      "process.step4.title": "Refine and deliver",
      "process.step4.desc": "Final spacing, typography, responsive checks, and polish — the details that make a website feel complete.",
      "work.title": "Selected work",
      "work.sub": "Featured websites, experiments, and client projects will appear here as they are ready.",
      "work.tag": "Reserved",
      "work.card1.title": "Portfolio v2",
      "work.card2.title": "Client Website",
      "work.card3.title": "Digital Experiment",
      "work.soon": "Coming soon.",
      "contact.title": "Send the idea. I'll shape the page.",
      "contact.sub": "Have a project in mind? Send the details.",
      "contact.cta": "Have a project in mind? Send the details.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.telegram": "Telegram",
      "contact.placeholder": "placeholder",
      "footer.note": "Clean websites. Clear structure. Minimal noise."
    },
    ua: {
      "meta.title": "Гліб Конберг — Веб-розробник",
      "meta.description": "Веб-розробник, який створює чисті мінімалістичні сайти для людей, чия онлайн-присутність має виглядати продумано.",
      "name.full": "Гліб Конберг",
      "name.portraitAlt": "Портрет Гліба Конберга",
      "about.portraitLabel": "Про Гліба Конберга",
      "nav.menuToggle": "Відкрити меню",
      "nav.langSwitcher": "Мова",
      "nav.about": "Про мене",
      "nav.build": "Сайти",
      "nav.process": "Процес",
      "nav.work": "Роботи",
      "nav.contact": "Контакт",
      "nav.cta": "Почати проєкт",
      "hero.eyebrow": "Гліб Конберг — Веб-розробник",
      "hero.title": "Перетворюю розмиті ідеї на сайти, що виглядають <em>підозріло</em> дорого.",
      "hero.sub": "Веб-розробник, який створює чисті мінімалістичні сайти для людей, чия онлайн-присутність має виглядати продумано.",
      "hero.viewWork": "Дивитися роботи",
      "hero.status": "Відкритий до проєктів будь-якої складності — від персональних портфоліо до повноцінних бізнес-сайтів.",
      "panel.availability": "доступність",
      "panel.open": "відкрито",
      "panel.stack": "стек",
      "panel.aesthetic": "естетика",
      "panel.minimal": "мінімал",
      "panel.templates": "шаблонів",
      "panel.taste": "смак",
      "panel.confidence": "впевненість",
      "panel.questionable": "стабільна",
      "about.title": "Не агентство. Не гуру. Просто людина, яка робить так, щоб сторінка мала сенс.",
      "about.p1": "Я Гліб Конберг — веб-розробник, який створює чисті мінімалістичні сайти для людей, проєктів і бізнесів, яким потрібна сильніша цифрова присутність.",
      "about.p2": "Я працюю зі структурою, візуальною ясністю, адаптивним дизайном і точною подачею — деталями, завдяки яким сайт виглядає продумано, а не випадково.",
      "about.role": "Веб-розробник",
      "about.credential": "Почесний житель Горішніх Плавнів, 2009.",
      "pill.minimal": "Мінімалістичні сайти",
      "pill.landing": "Лендинги",
      "pill.portfolio": "Персональні портфоліо",
      "pill.structure": "Чітка структура",
      "pill.copy": "Гострий текст",
      "pill.layout": "Адаптивна верстка",
      "build.title": "Що я створюю",
      "build.sub": "Сайти зі структурою, смаком і чіткою метою.",
      "build.card1.title": "Лендинги",
      "build.card1.desc": "Для послуг, запусків, персональних брендів і проєктів, яким потрібна одна сильна сторінка з чітким повідомленням.",
      "build.card2.title": "Персональні портфоліо",
      "build.card2.desc": "Для студентів, фрілансерів, креаторів і спеціалістів, які хочуть, щоб їхня онлайн-присутність виглядала продумано.",
      "build.card3.title": "Бізнес-сайти",
      "build.card3.desc": "Чисті адаптивні сайти для послуг, локального бізнесу, персональних брендів і проєктів на ранній стадії.",
      "build.card4.title": "Веб-концепти",
      "build.card4.desc": "Візуальні концепти та прототипи для ідей, які потрібно сформувати, протестувати й чітко презентувати.",
      "build.footnote": "Кожен сайт починається зі структури, ясності, адаптивної верстки та уваги до деталей, які зазвичай помічають надто пізно.",
      "process.title": "Як я працюю",
      "process.sub": "Чіткий шлях від ранньої ідеї до завершеної, продуманої сторінки.",
      "process.step1.title": "Визначити напрям",
      "process.step1.desc": "Ви передаєте концепцію й цілі. Я допомагаю сформувати зосереджений напрям для сторінки.",
      "process.step2.title": "Структурувати сторінку",
      "process.step2.desc": "Секції, текст, ієрархія та заклики до дії організуються перед візуальним доопрацюванням.",
      "process.step3.title": "Зібрати сайт",
      "process.step3.desc": "Чистий адаптивний сайт, створений для стабільної роботи на десктопі й мобільному.",
      "process.step4.title": "Довести й передати",
      "process.step4.desc": "Фінальні відступи, типографіка, адаптивні перевірки та полірування — деталі, через які сайт відчувається завершеним.",
      "work.title": "Обрані роботи",
      "work.sub": "Обрані сайти, експерименти та клієнтські проєкти з’являться тут, щойно будуть готові.",
      "work.tag": "Зарезервовано",
      "work.card1.title": "Портфоліо v2",
      "work.card2.title": "Сайт клієнта",
      "work.card3.title": "Цифровий експеримент",
      "work.soon": "Незабаром.",
      "contact.title": "Надішліть ідею. Я зберу її в сторінку.",
      "contact.sub": "Є проєкт? Надішліть деталі.",
      "contact.cta": "Є проєкт? Надішліть деталі.",
      "contact.email": "Пошта",
      "contact.github": "GitHub",
      "contact.telegram": "Telegram",
      "contact.placeholder": "заглушка",
      "footer.note": "Чисті сайти. Чітка структура. Мінімум зайвого."
    },
    ru: {
      "meta.title": "Глеб Конберг — Веб-разработчик",
      "meta.description": "Веб-разработчик, который делает чистые минималистичные сайты для людей, чьё онлайн-присутствие должно выглядеть продуманно.",
      "name.full": "Глеб Конберг",
      "name.portraitAlt": "Портрет Глеба Конберга",
      "about.portraitLabel": "О Глебе Конберге",
      "nav.menuToggle": "Открыть меню",
      "nav.langSwitcher": "Язык",
      "nav.about": "Обо мне",
      "nav.build": "Сайты",
      "nav.process": "Процесс",
      "nav.work": "Работы",
      "nav.contact": "Контакт",
      "nav.cta": "Начать проект",
      "hero.eyebrow": "Глеб Конберг — Веб-разработчик",
      "hero.title": "Превращаю размытые идеи в сайты, которые выглядят <em>подозрительно</em> дорого.",
      "hero.sub": "Веб-разработчик, который делает чистые минималистичные сайты для людей, чьё онлайн-присутствие должно выглядеть продуманно.",
      "hero.viewWork": "Посмотреть работы",
      "hero.status": "Открыт к проектам любой сложности — от персональных портфолио до полноценных бизнес-сайтов.",
      "panel.availability": "доступность",
      "panel.open": "открыто",
      "panel.stack": "стек",
      "panel.aesthetic": "эстетика",
      "panel.minimal": "минимал",
      "panel.templates": "шаблонов",
      "panel.taste": "вкус",
      "panel.confidence": "уверенность",
      "panel.questionable": "стабильная",
      "about.title": "Не агентство. Не гуру. Просто человек, который делает так, чтобы страница имела смысл.",
      "about.p1": "Я Глеб Конберг — веб-разработчик, который делает чистые минималистичные сайты для людей, проектов и бизнесов, которым нужно более сильное цифровое присутствие.",
      "about.p2": "Я работаю со структурой, визуальной ясностью, адаптивным дизайном и точной подачей — деталями, благодаря которым сайт выглядит продуманно, а не случайно.",
      "about.role": "Веб-разработчик",
      "about.credential": "Почётный житель Горишних Плавней, 2009.",
      "pill.minimal": "Минималистичные сайты",
      "pill.landing": "Лендинги",
      "pill.portfolio": "Персональные портфолио",
      "pill.structure": "Чёткая структура",
      "pill.copy": "Острый текст",
      "pill.layout": "Адаптивная вёрстка",
      "build.title": "Что я создаю",
      "build.sub": "Сайты со структурой, вкусом и понятной целью.",
      "build.card1.title": "Лендинги",
      "build.card1.desc": "Для услуг, запусков, персональных брендов и проектов, которым нужна одна сильная страница с понятным сообщением.",
      "build.card2.title": "Персональные портфолио",
      "build.card2.desc": "Для студентов, фрилансеров, креаторов и специалистов, которые хотят, чтобы их онлайн-присутствие выглядело продуманно.",
      "build.card3.title": "Бизнес-сайты",
      "build.card3.desc": "Чистые адаптивные сайты для услуг, локального бизнеса, персональных брендов и проектов на ранней стадии.",
      "build.card4.title": "Веб-концепты",
      "build.card4.desc": "Визуальные концепты и прототипы для идей, которые нужно сформировать, протестировать и понятно презентовать.",
      "build.footnote": "Каждый сайт начинается со структуры, ясности, адаптивной вёрстки и внимания к деталям, которые обычно замечают слишком поздно.",
      "process.title": "Как я работаю",
      "process.sub": "Понятный путь от ранней идеи к завершённой, продуманной странице.",
      "process.step1.title": "Определить направление",
      "process.step1.desc": "Вы передаёте концепцию и цели. Я помогаю сформировать сфокусированное направление для страницы.",
      "process.step2.title": "Структурировать страницу",
      "process.step2.desc": "Секции, текст, иерархия и призывы к действию организуются до начала визуальной доработки.",
      "process.step3.title": "Собрать сайт",
      "process.step3.desc": "Чистый адаптивный сайт, созданный для стабильной работы на десктопе и мобильном.",
      "process.step4.title": "Доработать и передать",
      "process.step4.desc": "Финальные отступы, типографика, адаптивные проверки и полировка — детали, из-за которых сайт ощущается завершённым.",
      "work.title": "Избранные работы",
      "work.sub": "Избранные сайты, эксперименты и клиентские проекты появятся здесь по мере готовности.",
      "work.tag": "Зарезервировано",
      "work.card1.title": "Портфолио v2",
      "work.card2.title": "Сайт клиента",
      "work.card3.title": "Цифровой эксперимент",
      "work.soon": "Скоро.",
      "contact.title": "Отправьте идею. Я соберу её в страницу.",
      "contact.sub": "Есть проект? Отправьте детали.",
      "contact.cta": "Есть проект? Отправьте детали.",
      "contact.email": "Почта",
      "contact.github": "GitHub",
      "contact.telegram": "Telegram",
      "contact.placeholder": "заглушка",
      "footer.note": "Чистые сайты. Чёткая структура. Минимум лишнего."
    }
  };

  function getStoredLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return LANGS.indexOf(stored) !== -1 ? stored : "en";
  }

  function htmlLang(code) {
    if (code === "ua") return "uk";
    if (code === "ru") return "ru";
    return "en";
  }

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = htmlLang(lang);

    document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
      var value = dict[key];
      if (value == null) return;
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var value = dict[key];
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var value = dict[key];
      if (value != null) el.setAttribute("alt", value);
    });

    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initI18n() {
    applyLanguage(getStoredLang());

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang && translations[lang]) applyLanguage(lang);
      });
    });
  }

  initI18n();

  // Current year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header, scroll progress
  var header = document.querySelector(".site-header");
  var scrollProgressBar = document.getElementById("scrollProgressBar");
  var scrollTicking = false;

  function updateScrollUi() {
    if (header) {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    if (scrollProgressBar) {
      var doc = document.documentElement;
      var scrollTop = window.scrollY || doc.scrollTop;
      var maxScroll = doc.scrollHeight - window.innerHeight;
      var progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      scrollProgressBar.style.width = (progress * 100) + "%";
    }
    scrollTicking = false;
  }

  function onScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollUi);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  updateScrollUi();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll (with sticky offset) for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var marginTop = parseFloat(getComputedStyle(target).scrollMarginTop);
      var offset = marginTop > 0 ? marginTop : (header ? header.offsetHeight : 0);
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  // Staggered reveal on scroll
  function initReveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var staggerMs = 85;

    function revealGroup(group) {
      var items = group.querySelectorAll(".reveal:not(.in)");
      items.forEach(function (item, index) {
        item.style.setProperty("--reveal-delay", index * staggerMs + "ms");
        item.classList.add("in");
      });
    }

    if (reduced || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var target = entry.target;
          var group = target.closest("[data-reveal-group]");
          if (group) revealGroup(group);
          else target.classList.add("in");
          io.unobserve(target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll("[data-reveal-group]").forEach(function (group) {
      var first = group.querySelector(".reveal");
      if (first) io.observe(first);
    });

    reveals.forEach(function (el) {
      if (!el.closest("[data-reveal-group]")) io.observe(el);
    });
  }

  initReveal();

  // Magnetic CTA buttons (desktop / fine pointer only)
  function initMagneticButtons() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    var strength = 10;
    document.querySelectorAll(".magnetic-btn").forEach(function (btn) {
      var inner = btn.querySelector(".magnetic-btn__inner");
      if (!inner) return;

      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform =
          "translate(" + (x * strength) + "px," + (y * strength) + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        inner.style.transform = "";
      });
    });
  }

  initMagneticButtons();

  // Animate hero meters once visible
  var meters = document.querySelectorAll(".meter-fill");
  setTimeout(function () {
    meters.forEach(function (m) { m.classList.add("run"); });
  }, 500);

  // Subtle cursor glow (desktop / fine pointer only)
  var glow = document.querySelector(".glow");
  if (glow && window.matchMedia("(pointer: fine)").matches) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      glow.style.opacity = "1";
      if (!raf) loop();
    });
    window.addEventListener("mouseout", function () { glow.style.opacity = "0"; });
    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = "translate(" + (cx - 270) + "px," + (cy - 270) + "px)";
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  }
})();
