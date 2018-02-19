$(document).ready(function() {
  // Seleccionando elementos
  var $main = $('main');
  var $form = $('.input-group');
  var $label = $('h6');
  var $code = $('input[type=text]');
  var $button = $('#btnNext');
  var $resend = $('#btnResend');
  var validatedCode = false;

  alert('Tu código: LAB-' + localStorage.code);

  $main.removeClass('hidden');

  $label.append('<strong>' + localStorage.phone + '</strong>');

  function onButton() {
    $button.attr('disabled', false);
  }

  function offButton() {
    $button.attr('disabled', 'disabled');
  }

  function onlyNumber(event) {
    var REGEXNUMBER = /^[0-9]*$/;
    var result = REGEXNUMBER.test(event.key);
    if (result) {
      validatedCode = true;
    } else {
      validatedCode = false;
    }
    return validatedCode;
  };

  $form.on('keypress', onlyNumber);

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
