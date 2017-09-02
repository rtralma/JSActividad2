var btnSuma = document.getElementById("suma");
var btnResta = document.getElementById("resta");
var btnMultiplicacion = document.getElementById("multiplicacion");
var btnDivision = document.getElementById("division");
var resultado = document.getElementById("resultado");
var inputuno = document.getElementById("input-uno");
var inputdos = document.getElementById("input-dos");

btnSuma.addEventListener("click", function(){

  var n1 = inputuno.value;
  var n2 = inputdos.value;
  resultado.innerHTML = suma(n1,n2);
})

btnResta.addEventListener("click", function(){
  var n1 = inputuno.value;
  var n2 = inputdos.value;
  resultado.innerHTML = resta(n1,n2);
})

btnMultiplicacion.addEventListener("click", function(){
  var n1 = inputuno.value;
  var n2 = inputdos.value;
  resultado.innerHTML = multiplicacion(n1,n2);
})

btnDivision.addEventListener("click", function(){
  var n1 = inputuno.value;
  var n2 = inputdos.value;
  resultado.innerHTML = division(n1,n2);
})

function suma(n1, n2){
  esigual = parseInt(n1)+parseInt(n2);
  if(isNaN(esigual)){
    esigual = "<span class='error'>Error, asegúrese de ingresar correctamente numeros enteros</span>";
  }
  return esigual;
}

function resta(n1, n2){
  esigual = parseInt(n1)-parseInt(n2);
  if(isNaN(esigual)){
    esigual = "<span class='error'>Error, asegúrese de ingresar correctamente numeros enteros</span>";
  }
  return esigual;
}

function multiplicacion(n1, n2){
  esigual = parseInt(n1)*parseInt(n2);
  if(isNaN(esigual)){
    esigual = "<span class='error'>Error, asegúrese de ingresar correctamente numeros enteros</span>";
  }
  return esigual;
}

function division(n1, n2){
  esigual = parseInt(n1)/parseInt(n2);
  if (n2 == "0"){
    esigual = "<span class='error'>Division por 0 no soportada</span>";
  }else if(isNaN(esigual)){
    esigual = "<span class='error'>Error, asegúrese de ingresar correctamente numeros enteros</span>";
  }
  return esigual;
}