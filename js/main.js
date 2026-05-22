// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('.cursor-hover').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Reveal on scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll, { passive: true });
revealOnScroll();

// Hero text entrance
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('hero').classList.add('hero-revealed');
    revealOnScroll();
  }, 280);
});

// Hero exit: blur out + fade out on scroll
const heroInner = document.getElementById('hero-inner');
const heroEl    = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const heroH   = heroEl.offsetHeight;
  const sy      = window.scrollY;
  const progress = Math.max(0, Math.min((sy - heroH * 0.08) / (heroH * 0.525), 1));

  if (progress > 0) {
    heroInner.style.filter    = `blur(${progress * 18}px)`;
    heroInner.style.opacity   = String(1 - progress * 0.88);
    heroInner.style.transform = `scale(${1 - progress * 0.025})`;
  } else {
    heroInner.style.filter    = '';
    heroInner.style.opacity   = '';
    heroInner.style.transform = '';
  }
}, { passive: true });
