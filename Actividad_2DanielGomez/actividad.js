var altura = parseInt(prompt("Digite su estatura"))

if (altura <= 150) {
    console.log("Persona de altura baja")
} else {
    if (altura <= 170) {
        console.log("Persona de altura media")
    } else {
        if (altura > 171) {
            console.log("Persona alta")
        }
    }
}
