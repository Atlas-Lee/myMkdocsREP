document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeButtonId = 'theme-toggle-button';
  const topButtonId = 'scroll-to-top-button';

  function createFloatingActions() {
    const container = document.createElement('div');
    container.className = 'sticky-action-buttons';
    container.innerHTML = `
      <button id="${themeButtonId}" type="button" aria-label="切换主题">🌙 切换</button>
      <button id="${topButtonId}" type="button" aria-label="返回顶部" class="top-hidden">⬆️ 顶部</button>
    `;
    document.body.appendChild(container);
    return container;
  }

  function getPaletteOptions() {
    return Array.from(document.querySelectorAll('.md-option[data-md-color-scheme]'));
  }

  function getCurrentScheme() {
    return body.getAttribute('data-md-color-scheme') || '';
  }

  function updateThemeButtonLabel(button) {
    const current = getCurrentScheme();
    if (!button) return;
    if (current === 'slate') {
      button.textContent = '🌙 夜间';
      button.setAttribute('aria-label', '当前夜间模式，点击切换到日间模式');
    } else {
      button.textContent = '☀️ 日间';
      button.setAttribute('aria-label', '当前日间模式，点击切换到夜间模式');
    }
  }

  function togglePalette() {
    const paletteOptions = getPaletteOptions();
    if (!paletteOptions.length) return;
    const current = getCurrentScheme();
    const next = paletteOptions.find(opt => opt.dataset.mdColorScheme !== current) || paletteOptions[0];
    next.checked = true;
    next.dispatchEvent(new Event('change', { bubbles: true }));
    updateThemeButtonLabel(document.getElementById(themeButtonId));
  }

  function initThemeButton() {
    const button = document.getElementById(themeButtonId);
    if (!button) return;
    button.addEventListener('click', togglePalette);
    updateThemeButtonLabel(button);
  }

  function initScrollButton() {
    const button = document.getElementById(topButtonId);
    if (!button) return;
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 260) {
        button.classList.remove('top-hidden');
      } else {
        button.classList.add('top-hidden');
      }
    });
  }

  function collapseSiblings(toggle) {
    const item = toggle.closest('.md-nav__item--nested');
    if (!item) return;
    const parentNav = item.parentElement;
    if (!parentNav) return;
    parentNav.querySelectorAll(':scope > .md-nav__item--nested > input.md-nav__toggle:checked').forEach(function (other) {
      if (other !== toggle) {
        other.checked = false;
      }
    });
  }

  function initNavAccordion() {
    const toggles = Array.from(document.querySelectorAll('.md-nav__item--nested > input.md-nav__toggle'));
    if (!toggles.length) return;

    toggles.forEach(function (toggle) {
      toggle.addEventListener('change', function () {
        if (toggle.checked) {
          collapseSiblings(toggle);
        }
      });
    });

    const activeItems = Array.from(document.querySelectorAll('.md-nav__item--active'));
    activeItems.forEach(function (activeItem) {
      let current = activeItem.closest('.md-nav__item--nested');
      while (current) {
        const toggle = current.querySelector('> input.md-nav__toggle');
        if (toggle) {
          toggle.checked = true;
        }
        current = current.parentElement?.closest('.md-nav__item--nested');
      }
    });
  }

  const actions = createFloatingActions();
  if (actions) {
    initThemeButton();
    initScrollButton();
  }

  initNavAccordion();
});
