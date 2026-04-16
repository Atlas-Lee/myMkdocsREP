// docs/assets/javascripts/collapse-nav.js
function enforceClickable() {
  // 暴力覆盖所有导航链接
  document.querySelectorAll('.md-nav__link').forEach(link => {
    link.style.setProperty('pointer-events', 'auto', 'important');
  });
}

// 在主题加载后执行
const observer = new MutationObserver(() => {
  if (document.querySelector('.md-nav__link')) {
    enforceClickable();
    observer.disconnect();
  }
});
observer.observe(document.body, { childList: true, subtree: true });