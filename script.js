const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const copyButton = document.querySelector('#copy-email');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = 'fayajshaikh545@gmail.com';
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Email: ' + email;
    }
  });
}