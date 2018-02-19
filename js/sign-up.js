$(document).ready(function() {
  // Seleccionando elementos
  var $form = $('.input-group');
  var $cp = $('#code');
  var $phone = $('#inputPhone');
  var $button = $('#btnNext');
  var $option = $('li');
  
  // Declarando variables
  var MINLENGTH = 10;
  var index = 0;
  var validatedPhone = false;
  var randomNumber = 0;

  // Activa el button
  function onButton() {
    $button.attr('disabled', false);
  }

  // Desactiva el button
  function offButton() {
    $button.attr('disabled', 'disabled');
  }

  // Valida el ingreso de números
  function onlyNumber(event) {
    var REGEXNUMBER = /^[0-9]*$/;
    var result = REGEXNUMBER.test(event.key);
    if (result) {
      validatedPhone = true;
    } else {
      validatedPhone = false;
    }
    return validatedPhone;
  };

  // Evento para los elementos li: opciones
  $option.on('click', function() {
    index = $(this).data('option');
    switch (true) {
    case index === 0:
      $('<img src="../assets/icons/peru.ico">').replaceAll($('#dropdownMenu :first-child'));
      $cp.text('+51');
      break;
    case index === 1:
      $('<img src="../assets/icons/chile.ico">').replaceAll($('#dropdownMenu :first-child'));
      $cp.text('+52');
      break;
    case index === 2:
      $('<img src="../assets/icons/mexico.ico">').replaceAll($('#dropdownMenu :first-child'));
      $cp.text('+53');
      break;
    }
    $('img').addClass('img-icon');
    $('#dropdownMenu').addClass('btn-padding');
    $phone.attr('disabled', false);
    $phone.focus();
  });

  // Evento para el formulario
  $form.on('keypress', onlyNumber);

  // Evento para el input: Phone
  $phone.on('input', function() {
    var lengthPhone = $(this).val().length;
    if (lengthPhone === MINLENGTH) {
      onButton();
    } else {
      offButton();
    }
  });

  // Evento para el button
  $button.on('click', function(event) {
    event.preventDefault();
    // Generando el número aleatorio
    randomNumber = Math.floor(Math.random() * 900) + 100;
    // Almacena en el localStorage el código generado
    localStorage.code = randomNumber;
    localStorage.phone = $cp.text() + $phone.val();
    window.location.href = 'verify.html';
  });
});
