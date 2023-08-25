//optimizar es igual a ahorrarse variables

//funcion tradicional
function ObtenerNombre(codigo){
    // split solo divide cadenas
    //let result = codigo.split(":")
    return codigo.split(":")[1]   
}
//let obtencion = ObtenerNombre("45:santi")

//funcion flecha
let flecha = codigo => codigo.split(":")[1]  
      

console.log(flecha("45:santi"))

