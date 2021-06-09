var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas[0]);

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

for (var estudiante of estudiante) {
    console.log(estudiante);
}


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    console.log(estudiante);
}
/*
METODOS
filter(function) Para filtrar valores
map(function) mapea todo el array
find(function) encuentra el primer valor que cumpla la condicion
foreach(function) recorre cada item del array 
some(function) permite verificar si hay cierta info en el array
*/