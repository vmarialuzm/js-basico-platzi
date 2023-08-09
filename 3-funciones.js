// Declarativas

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego");

// Expresión o anónimas

var miFuncion = function(a,b){
    var resultado = a + b;
    return resultado;
}

miFuncion(1,2);