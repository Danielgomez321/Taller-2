var escritorio = 400000
var cantidad = parseInt(prompt("Digite la cantifad de escritorios"))
var resultado = 0

if (cantidad < 5) {
    resultado = (escritorio - escritorio * 0.1) * cantidad
    console.log("Total a pagar" + resultado)
} else {
    if (cantidad >= 5) {
        if (cantidad < 10) {
            resultado = (escritorio - escritorio * 0.2) * cantidad
            console.log("Total a pagar" + resultado)
        }
    }
    if (cantidad >= 10) {
        resultado = (escritorio - escritorio * 0.4) * cantidad
        console.log("Total a pagar" + resultado)
}
}