"use strict"

//const cuentas = [
   //{
   // nombre: "Rogelio",
  //  saldo: 250,
 // },
 //  {
 //   nombre: "Alexis",
 //   saldo: 580,
 //  },
 //  {
 //  nombre: "Samuel",
 //   saldo: 900,
 //  },
//];

let usuario1 = { nombre: "Rogelio", saldo: 250};
let usuario2 = { nombre: "Alexis", saldo: 580};
let usuario3 = { nombre: "Samuel", saldo: 900};

const selectCuenta = document.getElementById("cuentas"); //¿Se puede omitir esto?
const btnSelect = document.querySelector(".select");
const password = document.getElementById("pass");
const btnVerificar = document.getElementById("verificar");
const errorPass =document.querySelector(".error");

const opciones = document.querySelector(".opciones");

const btnConsultar = document.querySelector(".consultar-saldo");
const consultarSaldo = document.querySelector(".saldo");
const btnCerrar = document.querySelector(".cerrar-saldo");

const btnIngresar = document.querySelector(".ingresar-monto");
const btnClose = document.querySelector(".cerrar-montos");
const btonClose = document.querySelector(".cerrar-montos2");

const btnRetirar = document.querySelector(".retirar-monto");

const montos = document.querySelector(".montos");
const montos2 = document.querySelector(".montos2");
const inputMonto = document.getElementById("monto");
const inputMonto2 = document.getElementById("monto2");

const btnAceptar = document.getElementById("aceptar");
const btonAceptar = document.getElementById("aceptar2");

const saldoS = document.getElementById("saldo");
const saldoActual = document.getElementById("saldo-actual");
const spanActual2 = document.getElementById("saldo-actual2");

//let cuentaSeleccionada = document.getElementById("cuentas").value;
// contraseñaSeleccionada = document.getElementById("pass").value; //ya no sirve

//Contraseña

function verificarContraseña() {
  if (pass.value == "1973") {
    opciones.classList.remove("hidden");
    errorPass.classList.add("hidden");
  } else {
    errorPass.classList.remove("hidden"); 
  }
};

function cambiarCuenta() {
  opciones.classList.add("hidden");
  consultarSaldo.classList.add("hidden");
  errorPass.classList.add("hidden");
  montos.classList.add("hidden");
  montos2.classList.add("hidden");
};

btnVerificar.addEventListener("click", verificarContraseña);
btnSelect.addEventListener("click", cambiarCuenta);

//Consultar Saldo

function consultaDeSaldo() {
  consultarSaldo.classList.remove("hidden");
  montos.classList.add("hidden");
  montos2.classList.add("hidden");
};

function cerrarSaldo() {
  consultarSaldo.classList.add("hidden");
};

btnConsultar.addEventListener("click", consultaDeSaldo, ejecutarConsulta); //CHECAR EJECUTARcONSULTA
btnCerrar.addEventListener("click", cerrarSaldo);

//Ingresar Saldo

function ingresarSaldo() {
  montos.classList.remove("hidden");
  montos2.classList.add("hidden");
  consultarSaldo.classList.add("hidden");
};

btnIngresar.addEventListener("click", ingresarSaldo);

function cerrarMontos() {
  montos.classList.add("hidden");
  consultarSaldo.classList.add("hidden");
};

btnClose.addEventListener("click", cerrarMontos);

//Retirar Saldo

function retirarSaldo() {
  montos2.classList.remove("hidden");
  consultarSaldo.classList.add("hidden");
  montos.classList.add("hidden");
};

btnRetirar.addEventListener("click", retirarSaldo);

function cerrarMontos2() {
  montos2.classList.add("hidden");
  consultarSaldo.classList.add("hidden");
};

btonClose.addEventListener("click", cerrarMontos2);

//Ejecutar Consultar Saldo

function ejecutarConsulta() {
  if (selectCuenta.value == usuario1.nombre) {
    document.getElementById("saldo").textContent = " " + usuario1.saldo;
  } else if (selectCuenta.value == usuario2.nombre) {
    document.getElementById("saldo").textContent = " " + usuario2.saldo;
  } else if (selectCuenta.value == usuario3.nombre) {
    document.getElementById("saldo").textContent = " " + usuario3.saldo;
  }  
};

// Ejecutar Ingresar Monto

function sumar() {
  let total = inputMonto + usuario1.saldo;
  if (total < 990) {
    document.getElementById("saldo-actual").textContent = " " + total;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

function sumar2() {
  let total2 = inputMonto + usuario2.saldo;
  if (total2 < 990) {
    document.getElementById("saldo-actual").textContent = " " + total2;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

function sumar3() {
  let total3 = inputMonto + usuario3.saldo;
  if (total3 < 990) {
    document.getElementById("saldo-actual").textContent = " " + total3;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

btnAceptar.addEventListener("click", sumar, sumar2, sumar3);

// Ejecutar Retirar Monto

function restar() {
  let total4 = inputMonto - usuario1.saldo;
  if (total4 > 10) {
    document.getElementById("saldo-actual").textContent = " " + total4;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

function restar2() {
  let total5 = inputMonto - usuario2.saldo;
  if (total5 > 10) {
    document.getElementById("saldo-actual").textContent = " " + total5;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

function restar3() {
  let total6 = inputMonto - usuario3.saldo;
  if (total6 > 10) {
    document.getElementById("saldo-actual").textContent = " " + total6;
  } else {
    alert("Monto inválido. Intente de nuevo:");
  }
};

btonAceptar.addEventListener("click", restar, restar2, restar3);