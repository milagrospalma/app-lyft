$(document).ready(function() {
  // Seleccionando elementos
  var $code = $('input[type=number]');
  var $button = $('#btnNext');

  // Evemto para el input
  $code.on('input', function() {
    if ($(this).val() === localStorage.code) {
      $button.attr('disabled', false);
    } else {
      $button.attr('disabled', true);
    }
  });

  // Evento para el button Next
  $button.on('click', function() {
    localStorage.code = $code.val();
    window.location.href = 'inspected.html';
  });
});
