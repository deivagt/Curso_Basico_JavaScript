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