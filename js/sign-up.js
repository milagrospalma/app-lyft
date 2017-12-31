$(document).ready(function() {
  // Seleccionando elementos
  var $phone = $('#inputPhone');
  var $button = $('#btnNext');
  var $option = $('li');

  // Declarando variables
  var MINLENGTH = 9;
  var index = 0;
  var validatedPhone = false;
  var lengthOfPostalCode = 0;
  var randomNumber = 0;

  // Activa el button
  function onButton() {
    $button.attr('disabled', false);
  }

  // Desactiva el button
  function offButton() {
    $button.attr('disabled', 'disabled');
  }

  // Evento para los elementos li: opciones
  $option.on('click', function() {
    index = $(this).data('option');
    switch (true) {
    case index === 0:
      $('<img src="../assets/icons/peru.ico">').replaceAll($('#dropdownMenu :first-child'));
      $phone.val('51');
      break;
    case index === 1:
      $('<img src="../assets/icons/chile.ico">').replaceAll($('#dropdownMenu :first-child'));
      $phone.val('52');
      break;
    case index === 2:
      $('<img src="../assets/icons/mexico.ico">').replaceAll($('#dropdownMenu :first-child'));
      $phone.val('53');
      break;
    }
    // Agregando clase al ícono seleccionado
    $('img').addClass('img-icon');
    // Agregando clase al button dropdown
    $('#dropdownMenu').addClass('btn-padding');
    // Capturando la longitud del valor del input
    lengthOfPostalCode = $phone.val().length;
    // Habilitando el input
    $phone.attr('disabled', false);
    // Enfocando el input
    $phone.focus();
  });

  // Evento para el input: Phone
  $phone.on('input', function() {
    var lengthPhone = $(this).val().length;
    var characters = lengthPhone - lengthOfPostalCode;
    if (characters === MINLENGTH) {
      validatedPhone = true;
      onButton();
    } else {
      if (lengthPhone === 0) {
        $phone.attr('disabled', 'disabled');
      }
      validatedPhone = false;
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
    localStorage.phone = $phone.val();
    window.location.href = 'verify.html';
  });
});
