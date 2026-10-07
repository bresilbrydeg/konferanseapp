const select = document.querySelector('#foredrag');
if (select) {
  const id = new URLSearchParams(location.search).get('foredrag');
  if ([...select.options].some(option => option.value === id)) select.value = id;
  if (location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname)) {
    document.querySelector('#lokal-info').textContent = 'Dette er en lokal forhåndsvisning. Spørsmål kan sendes når nettsiden er publisert og skjemamottaket er aktivert.';
    document.querySelector('form').addEventListener('submit', event => { event.preventDefault(); document.querySelector('#lokal-info').focus(); });
    document.querySelector('button[type="submit"]').disabled = true;
  }
}
