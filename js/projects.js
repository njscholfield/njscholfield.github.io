function hashHandler() {
  const hash = location.hash;
  if(hash == '') {
    const cards = document.querySelectorAll('.grid-card[aria-modal="true"]');

    cards.forEach(card => {
      card.setAttribute('aria-modal', false);
      card.removeAttribute('aria-role');
      card.querySelector('.description').setAttribute('aria-hidden', true);
      const links = card.querySelectorAll('.description a[tabindex="0"], .btn-container a[tabindex="0"]');
      links.forEach(link => link.tabIndex = -1);
    });
  } else {
    const card = document.querySelector(`${hash} .grid-card`);

    card.setAttribute('aria-modal', true);
    card.setAttribute('aria-role', 'dialog');
    card.querySelector('.description').setAttribute('aria-hidden', false);
    card.querySelectorAll('a').forEach(a => a.tabIndex = 0);
  }
}
window.addEventListener('hashchange', hashHandler);
hashHandler();

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape')
    window.location.hash = '';
});
