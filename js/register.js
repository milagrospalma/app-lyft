$(document).ready(function() {
  // Seleccionando elementos
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('input[type=email]');
  var $checkbox = $('input[type=checkbox]');
  var $button = $('#btnNext');

  // Declarando e inicializando variables
  var MINLENGTH = 3;
  var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  // Variables de validación
  var validatedFirstName = false;
  var validatedLastName = false;
  var validatedEmail = false;
  var validatedCheckbox = false;

  // Activa el button
  function onButton() {
    if (validatedFirstName && validatedLastName && validatedEmail && validatedCheckbox) {
      $button.attr('disabled', false);
    }
  }
  // Desactiva el button
  function offButton() {
    $button.attr('disabled', 'disabled');
  }

  // Evento para el primer input: First Name
  $firstName.on('input', function() {
    if ($(this).val().length >= MINLENGTH) {
      validatedFirstName = true;
      onButton();
    } else {
      validatedFirstName = false;
      offButton();
    }
  });

  // Evento para el segundo input: Last Name
  $lastName.on('input', function() {
    if ($(this).val().length >= MINLENGTH) {
      validatedLastName = true;
      onButton();
    } else {
      validatedLastName = false;
      offButton();
    }
  });

  // Evento para el tercer input: Email
  $email.on('input', function() {
    if (REGEXEMAIL.test($(this).val())) {
      validatedEmail = true;
      onButton();
    } else {
      validatedEmail = false;
      offButton();
    }
  });

  // Evento para el cuarto input: Checkbox
  $checkbox.on('click', function(event) {
    if (event.target.checked) {
      validatedCheckbox = true;
      onButton();
    } else {
      validatedCheckbox = false;
      offButton();
    }
  });

  // Evento para el button Next
  $button.on('click', function(event) {
    event.preventDefault();
    // Almacenando los valores de los inputs para la vista log in
    localStorage.firstname = $firstName.val();
    localStorage.lastname = $lastName.val();
    localStorage.email = $email.val();
    // Redirecciona a la vista de confirmación (última vista)
    window.location.href = 'close.html';
  });
});
