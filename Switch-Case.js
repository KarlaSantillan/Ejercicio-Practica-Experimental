//Switch-case
// Ejercicio 7: Determinar el nombre del día de la semana
let dia = new Date().getDay();
//En esta línea de código, se crea un objeto Date() y se llama al método getDay() para obtener el día de la semana actual. 
//El valor del día de la semana se asigna a la variable dia. 
//Los valores posibles para dia van desde 0 (Domingo) hasta 6 (Sábado).
let nombreDia;
//En esta línea de código, se declara la variable nombreDia sin asignarle ningún valor.
switch (dia) {
  case 0:
    nombreDia = "Domingo";
    break;
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
}
//En estas líneas de código, se utiliza la estructura switch para evaluar el valor de dia y asignar 
//un nombre de día correspondiente a la variable nombreDia.
//
//Si dia es igual a 0, se asigna el valor "Domingo" a nombreDia.
//Si dia es igual a 1, se asigna el valor "Lunes" a nombreDia.
//Si dia es igual a 2, se asigna el valor "Martes" a nombreDia.
//Si dia es igual a 3, se asigna el valor "Miércoles" a nombreDia.
//Si dia es igual a 4, se asigna el valor "Jueves" a nombreDia.
//Si dia es igual a 5, se asigna el valor "Viernes" a nombreDia.
//Si dia es igual a 6, se asigna el valor "Sábado" a nombreDia.
console.log("Hoy es " + nombreDia);
//En esta línea de código, se imprime en la consola el mensaje "Hoy es " 
//seguido del valor almacenado en la variable nombreDia utilizando la función console.log().
