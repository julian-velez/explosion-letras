// Selecciona el elemento del DOM con la clase "explosion-container" y lo almacena en la variable "explosionContainer".
const explosionContainer = document.querySelector(".explosion-container");

// Selecciona el elemento del DOM con la clase "explosion-text" y lo almacena en la variable "explosionText".
const explosionText = document.querySelector(".explosion-text");

// Divide el contenido de texto del elemento "explosionText" en un array de caracteres individuales y lo almacena en la variable "letters".
const letters = explosionText.innerText.split("");

// Vacía el contenido de texto del elemento "explosionText".
explosionText.innerText = "";

// Recorre cada letra en el array "letters".
letters.forEach((letter) => {
  // Por cada letra, crea un nuevo elemento "span".
  const span = document.createElement("span");

  // Establece el contenido de texto del "span" como la letra actual.
  span.innerText = letter;

  // Agrega el "span" como hijo del elemento "explosionText".
  explosionText.appendChild(span);
});

// Selecciona todos los elementos "span" dentro del elemento "explosionText" y los almacena en la variable "spans".
const spans = document.querySelectorAll(".explosion-text span");

// Recorre cada "span" en la lista de "spans" y asigna un retardo de animación progresivo basado en su índice.
spans.forEach((span, index) => {
  // El estilo "animationDelay" establece un retardo en milisegundos para el inicio de la animación de cada "span".
  // Cada "span" tendrá un retardo diferente en función de su posición en la lista.
  span.style.animationDelay = `${(index + 1) * 50}ms`;
});
