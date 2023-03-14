var estatura = parseInt(prompt("Digite su Estatura"))
var velocidad = parseInt(prompt("Digite su Velocidad"))
var edad = parseInt(prompt("Digite su edad"))

if (estatura >= 175) {
    if (velocidad >= 100) {
        if (edad < 18)
            console.log("puede ingresar al equipo")
        console.log("Ingresa a la liga de menores")

    }
} else {
    if (estatura < 175) {
        console.log("no puede ingresar al equipo")
    }
}