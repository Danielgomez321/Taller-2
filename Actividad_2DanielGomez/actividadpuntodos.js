var matematicas = parseInt(prompt("Nota de matematica"))
var español = parseInt(prompt("Nota de español"))
var sociales = parseInt(prompt("Nota de sociales"))
var promedio = (matematicas + español + sociales) / 3

if (promedio == 10) {
    console.log("el promedio" + promedio + "Excelente")
}
else {
    if (promedio >= 7) {
        if (promedio < 10) {
            console.log("el promedio" + promedio + "Bueno")
        }
    } else {
        if (promedio < 7) {
            console.log("el promedio" + promedio + "Insuficiente")
        }
    }
}5