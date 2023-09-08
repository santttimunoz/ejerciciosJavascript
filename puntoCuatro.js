
function revisar(n){

let negativos = Array.from({length : n} , ()=> Math.floor(Math.random() * 10) - 2)
    
console.log(negativos)
let encontrarNegativas = negativos.filter(function(negativa){    
    return negativa < 0
})

return encontrarNegativas
}

console.log(`las espadas con energia negativa son: ${revisar(30)}`)

//los valores negativos no varian mas alla de -1 y -2