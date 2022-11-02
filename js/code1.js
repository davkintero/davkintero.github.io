/* =====================================
  ! DECLARACIÓN DE OBJETOS Y VARIABLES ¡
  ==================================== */
let btnArrow = document.getElementById("arrow");
let contentProyect = document.getElementById("service");
let vertical = document.getElementById("b");

/* ============================
  ! DECLARACIÓN DE FUNCIONES ¡
  =========================== */
function active() {
  contentProyect.classList.add("container-display");
  vertical.classList.add("hidden");
}



/* ========================
  ! ASIGNACIÓN DE EVENTOS¡
  ======================= */
//ASIGNACIÓN DE EVENTOS
window.onload = function () {
  btnArrow.addEventListener("click", active);
}
