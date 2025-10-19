// ハンバーガーメニュー
const menuBtn = document.querySelector('.menu-toggle');
const menuIcon = menuBtn.querySelector('img');
const header = document.querySelector('header');
const headerLinks = header.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
    const willOpen = header.classList.toggle('is-active');
    menuBtn.setAttribute('aria-expanded', String(willOpen));

    if (willOpen) {
        menuIcon.src = '/images/icon-close.svg';
        menuIcon.alt = 'メニューを閉じる';
    } else {
        menuIcon.src = '/images/icon-hamburger.svg';
        menuIcon.alt = 'メニューを開く';
    }
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (header.classList.contains('is-active')) {
            header.classList.remove('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuIcon.src = '/images/icon-hamburger.svg';
            menuIcon.alt = 'メニューを開く';
        }
    });
});


// タブ切り替え
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');

        panels.forEach(panel => panel.hidden = true);
        const targetId = tab.getAttribute('aria-controls');
        document.getElementById(targetId).hidden = false;
    });
});

// アコーディオン
const triggers = document.querySelectorAll('.ac-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    const item = trigger.closest('.ac-item');
    const content = item.querySelector('.ac-inner');

    trigger.setAttribute('aria-expanded', String(!expanded));

    if (expanded) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
      requestAnimationFrame(() => {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
      });
      content.addEventListener('transitionend', function handler(e){
        if (e.propertyName !== 'max-height') return;
        content.hidden = true;
        content.style.removeProperty('max-height');
        content.style.removeProperty('opacity');
        content.removeEventListener('transitionend', handler);
      });
    } else {
      content.hidden = false;
      const h = content.scrollHeight;
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      requestAnimationFrame(() => {
        content.style.maxHeight = h + 'px';
        content.style.opacity = '1';
      });
      content.addEventListener('transitionend', function handler(e){
        if (e.propertyName !== 'max-height') return;
        content.style.removeProperty('max-height');
        content.style.removeProperty('opacity');
        content.removeEventListener('transitionend', handler);
      });
    }
  });
});