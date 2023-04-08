//maybe


selectCuenta.addEventListener("change", function(){
  let cuentaSeleccionada = selectCuenta.value;

  switch (cuentaSeleccionada) {
    case "usuario1":
      mostrarSaldo(usuario1.saldo);
      break;
    case "usuario2":
      mostrarSaldo(usuario2.saldo);
      break;
    case "usuario3":
      mostrarSaldo(usuario3.saldo);
      break;
    default:
      break;
  }
}
);

function mostrarSaldo(saldo) {
  let span = document.getElementById("saldo");
  span.innerText = saldo;
}

// OTRA OPCION

//Ejecutar Ingresar monto

function ejecutarIngresar() {
  if (inputMonto + usuario1.saldo = 10 < || 990 > ) { //¿Cómo especificar para cada usuario? Sólo más de 990.
    inputMonto + usuario1.saldo; //Que se haga la suma
    spanActual.innerText = usuario1.saldo;//la suma
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

btnAceptar.addEventListener("click", ejecutarIngresar);

//Ejecutar Retirar Monto

function sumar() {
  let total = inputMonto + usuario1.saldo;
  if (total > 990) {
    spanActual.innerText = total
  }
}

function ejecutarRetirar() {
  if (inputMonto2 - usuario1.saldo = ) {//Sólo menos de 10 
    inputMonto2 - usuario1.saldo;
    spanActual2.innerText = usuario1.saldo;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
}

btonAceptar.addEventListener("click", ejecutarRetirar);
