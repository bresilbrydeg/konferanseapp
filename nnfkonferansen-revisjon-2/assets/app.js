const form = document.querySelector('form[name="foredragssporsmal"]');
if (form && (location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname))) {
  const info = document.querySelector('#lokal-info');
  info.textContent = 'Dette er en lokal forhåndsvisning. Spørsmål kan sendes når nettsiden er publisert og skjemamottaket er aktivert.';
  form.addEventListener('submit', event => event.preventDefault());
  form.querySelector('button[type="submit"]').disabled = true;
}
