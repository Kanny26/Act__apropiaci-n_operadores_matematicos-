//declaracion de variables 
let nota1, nota2, nota3, promedio;

//datos de entrada 
nota1 = prompt("ingrese la primera nota: ");
nota2 = prompt("ingrese la segunda nota: ");
nota3 = prompt("ingrese la tercera nota: ");

//parceo de datos 
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

//proceso matematico
promedio = (nota1 + nota2 + nota3)/3;

// Datos de salida
alert("El promedio del estudiante es: " + promedio)