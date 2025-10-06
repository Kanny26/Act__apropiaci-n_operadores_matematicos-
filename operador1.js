// El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

//declaracion de variables 
let base, altura, area, perímetro;

//datos de entrada 
base = prompt("Ingrese la base del terreno en metros: ");
altura = prompt("Ingrese la altura del terreno en metros: ");

//parceo de datos 
base = parseFloat(base);
altura = parseFloat(altura);

//proceso matematico

area = base * altura;
perimetro = 2 * (base + altura);

// Datos de salida
alert("El área del terreno es: " + area + " m²");
alert("El perímetro del terreno es: " + perimetro + " m");
