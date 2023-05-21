const form = document.querySelector('form');
let alert = null;

const validateForm = function() {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const telefone = document.querySelector('#telefone').value;
  const cbCompetencias = document.querySelector('#cb-competencias').checked;
  const aceitoTermos = document.querySelector('#aceito-termos').checked;

  if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '' || !cbCompetencias || !aceitoTermos) {
    if (!alert) {
      alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      form.prepend(alert);
    }
    alert.textContent = 'Por favor, preencha todos os campos e aceite os termos antes de enviar o formulário.';
    return false;
  } else {
    if (alert) {
      alert.remove();
      alert = null;
    }
    window.location.reload();
    return true;
  }
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
