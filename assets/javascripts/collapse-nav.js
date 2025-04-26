// docs/assets/javascripts/collapse-nav.js
console.log("[v9适配版] 脚本加载成功");

function collapseMaterial9() {
  // 新版选择器（关键变化！）
  const navItems = document.querySelectorAll('.md-nav__item--nested');
  
  navItems.forEach(item => {
    // 跳过活动项及其父级
    if (item.closest('.md-nav__item--active, .md-nav__item--current')) return;
    
    // 新版切换方式
    const toggle = item.querySelector('.md-nav__toggle');
    if (toggle) {
      toggle.checked = false;
      item.classList.remove('md-nav__item--active');
      // 隐藏子导航（必须！）
      const subNav = item.querySelector('.md-nav');
      if (subNav) subNav.style.display = 'none';
    }
  });
}

// 三重触发机制
const run = () => {
  collapseMaterial9();
  setTimeout(collapseMaterial9, 300);
  setTimeout(collapseMaterial9, 1000);
};

document.addEventListener('DOMContentLoaded', run);
window.addEventListener('load', run);