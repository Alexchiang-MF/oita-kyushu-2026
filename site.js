(() => {
  const root = document.documentElement;
  root.classList.add('js');

  // Reveal on scroll: content stays visible without JS; with JS it eases in once.
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealables = document.querySelectorAll('.rv, .route');
  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(el => io.observe(el));
  }

  // Highlight the day tab for the section in view.
  const tabs = [...document.querySelectorAll('.daytabs a')];
  const sections = tabs.map(t => document.querySelector(t.getAttribute('href'))).filter(Boolean);
  if (tabs.length && 'IntersectionObserver' in window) {
    const so = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        tabs.forEach(t => {
          const on = t.getAttribute('href') === '#' + e.target.id;
          t.setAttribute('aria-current', on ? 'true' : 'false');
          if (on) { const bar = t.parentElement; bar.scrollTo({ left: bar.scrollLeft + t.getBoundingClientRect().left - bar.getBoundingClientRect().left - 8, behavior: reduce ? 'auto' : 'smooth' }); }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => so.observe(s));
    // Sections without a tab clear the highlight so it never points at the wrong day.
    document.querySelectorAll('main > section').forEach(s => {
      if (!sections.includes(s) && !sections.some(d => s.contains(d))) so.observe(s);
    });
  }

  // Trip clock in Japan time: countdown before, "today" during.
  const tripDays = { '2026-10-17': 1, '2026-10-18': 2, '2026-10-19': 3, '2026-10-20': 4, '2026-10-21': 5 };
  const jst = new Date(Date.now() + 9 * 3600e3);
  const ymd = jst.toISOString().slice(0, 10);
  const todayUTC = Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), jst.getUTCDate());
  const daysLeft = Math.round((Date.UTC(2026, 9, 17) - todayUTC) / 864e5);
  const chip = document.getElementById('countdown');
  const cta = document.getElementById('cta-today');
  const n = tripDays[ymd];
  if (n) {
    document.querySelectorAll(`.sign[data-day="${n}"], .spot-day[data-day="${n}"]`).forEach(s => s.classList.add('is-today'));
    const tab = tabs.find(t => t.getAttribute('href') === '#d' + n);
    if (tab) tab.insertAdjacentHTML('beforeend', '<span class="today">今天</span>');
    if (chip) { chip.innerHTML = `今天是 <b>DAY ${n}</b>`; chip.hidden = false; }
    if (cta) { cta.href = '#d' + n; cta.lastChild.textContent = '看今天行程'; }
  } else if (daysLeft > 0 && chip) {
    chip.innerHTML = `出發倒數 <b>${daysLeft}</b> 天`;
    chip.hidden = false;
  }

  // Copy Japanese name + address for the car navigation.
  document.addEventListener('click', e => {
    const btn = e.target.closest('.copy');
    if (!btn) return;
    const text = btn.dataset.copy;
    const label = btn.lastChild;
    const done = () => {
      btn.classList.add('done');
      const prev = label.textContent;
      label.textContent = '已複製';
      setTimeout(() => { btn.classList.remove('done'); label.textContent = prev; }, 1800);
    };
    const fallback = () => {
      const addr = btn.closest('.place')?.querySelector('.addr');
      if (!addr) return;
      const r = document.createRange(); r.selectNodeContents(addr);
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
      label.textContent = '已選取，請按複製';
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  });
})();
