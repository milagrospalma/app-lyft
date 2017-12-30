$(document).ready(function() {
  // Declarando variable
  var randomNumber = 0;

  // Generando el número aleatorio
  randomNumber = Math.floor(Math.random() * 900) + 100;

  // Muestra en un alert el código generado
  alert('Tu código: LAB-' + randomNumber);

  // Almacena en el localStorage el código generado
  localStorage.code = randomNumber;

  // Redireccionando a la vista en donde se ingresará el código generado
  window.location.href = '../views/verify.html';
});
