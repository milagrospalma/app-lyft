$(document).ready(function() {
  // Seleccionando elementos
  var $phone = $('#inputPhone');
  var $button = $('#btnNext');
  var $option = $('li');

  // Declarando variables
  var MINLENGTH = 9;
  var index = 0;
  var validatedPhone = false;
  var postalCode = 0;

  // Evento para los elementos li: opciones
  $option.on('click', function() {
    index = $(this).data('option');
    switch (true) {
    case index === 0:
      $('<img src="../assets/icons/peru.ico">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('51');
      // console.log($('#dropdownMenu1').html());
      break;
    case index === 1:
      $('<img src="../assets/icons/chile.ico">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('52');
      // $phone.focus();
      // console.log($('#dropdownMenu1').html());
      break;
    case index === 2:
      $('<img src="../assets/icons/mexico.ico">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('53');
      // $phone.focus();
      // console.log($('#dropdownMenu1').html());
      break;
    }
    // Capturando la longitud del valor del input
    postalCode = $phone.val().length;
    console.log(postalCode);
    // Enfocando el input
    $phone.focus();
  });

  // Desactiva el button
  function offButton() {
    $button.attr('disabled', true);
  }
  // Activa el button
  function onButton() {
    $button.attr('disabled', false);
  }

  // Evento para el input: Phone
  $phone.on('input', function() {
    var lengthPhone = $(this).val().length;
    console.log(lengthPhone);
    var caracter = lengthPhone - postalCode;
    console.log(caracter);
    if (caracter === MINLENGTH) {
      validatedPhone = true;
      onButton();
    } else {
      validatedPhone = false;
      offButton();
    }
  });

  // Evento para el button
  $button.on('click', function(event) {
    event.preventDefault();
    localStorage.phone = $phone.val();
    window.location.href = 'code.html';
  });
});
