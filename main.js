/* 1-Er Ejercicio */
/* Algoritmo usando bucle while y un condicional if-else, ademas de utilizar operadores */
alert(" Calculadora de Año Bisiesto");
let año = parseInt((prompt("Ingrese un Año:")));
while(( año >= 1582) && ("SALIR")){
    if((año % 4 === 0 )||(año % 400 === 0)){
        alert(`${año}  Año Bisiesto`);
    }
    else{
        alert(`${año}  Año no Bisiesto`);
    }
    añox = parseInt((prompt("Ingrese un Año nuevamente o escribra ( SALIR )  para continuar con otro ejercicio:")));
    año = añox;
}



/* 2-Do Ejercicio */
/* Calculamos los numeros Primos*/
/* alert("Calculo de Numero Primo");
let numero =  (parseInt(prompt("Ingrese un Numero mayor que 1 para determinar si es primo o no!")))
while((numero >1 ) && (numero != "SALIR")){
    if((numero % 1 === 0) && (numero % numero === 0)){
        alert(`${numero}  Es un numero Primo`);
    }
    else{
        alert(`${numero} No es un numero Primo`);
    }
    let numero1 = parseInt(prompt("Ingrese otro Numero o escriba ( SALIR )"));
    numero = numero1;
} */


/* 3-Er Ejercicio */
alert(" Retira tu Turno !");
nombre = prompt("Ingrese su Nombre!");
for(let i = 0; i >= 0; i++){
    alert(`${nombre} Tu Turno es# ${i}`);
    
    nombrex = prompt("Ingrese su Nombre!");
    nombre = nombrex;
}
