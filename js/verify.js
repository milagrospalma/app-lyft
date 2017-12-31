$(document).ready(function() {
  // Seleccionando elementos
  var $main = $('main');
  var $label = $('h6');
  var $code = $('input[type=number]');
  var $button = $('#btnNext');
  var $resend = $('#btnResend');

  // Muestra en un alert el código generado en sign-up
  alert('Tu código: LAB-' + localStorage.code);
  // Remueve la clase para mostrar el contenido de la vista
  $main.removeClass('hidden-xs');
  // Agrega número del sign up
  $label.append('<strong>+' + localStorage.phone + '</strong>');

  // Activa el button
  function onButton() {
    $button.attr('disabled', false);
  }

  // Desactiva el button
  function offButton() {
    $button.attr('disabled', 'disabled');
  }

  // Evento para el input
  $code.on('input', function() {
    if ($(this).val() === localStorage.code) {
      onButton();
    } else {
      offButton();
    }
  });

  // Evento para el button Next
  $button.on('click', function(event) {
    event.preventDefault();
    window.location.href = 'register.html';
  });

  // Evento par ael button Resend
  $resend.on('click', function(event) {
    event.preventDefault();
    randomNumber = Math.floor(Math.random() * 900) + 100;
    localStorage.code = randomNumber;
    window.location.href = 'verify.html';
  });
});
