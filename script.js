// Seleciona o formulário e adiciona um listener para o evento submit
document.querySelector('#contact-form').addEventListener('submit', function(e) {
  // Previne o envio padrão do formulário
  e.preventDefault();

  // Seleciona os valores dos campos
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var message = document.querySelector('#message').value;

  // Valida se os campos estão preenchidos
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Envia os valores do formulário para um endpoint
  // Neste exemplo, apenas exibimos uma mensagem de sucesso
  alert('Mensagem enviada com sucesso!');
});
