//funcion tradicional
function temperature(max, min){
    return `la temperatura media de la luna es: ${(max + min) / 2}`
}
console.log(temperature(3,4))


//funcion flecha
let temperatura = (max, min) =>{ 
    return `la temperatura media de la luna es: ${(max + min) / 2}`
} 
console.log(temperatura(3,4))