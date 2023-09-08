
function clones() {

    let arregloColnes = []
    let edadMayor = 0
    let repe = 0
    
    for (i = 0; i <= 4; i++) {

        let nombres = [23, 43, 54, 65, 43]
        let nombreRam = nombres[Math.floor(Math.random() * nombres.length)]
        let codigos = ["asdsa", "qwer", "awede", "fggf", "asdf"]
        let condigoRam = codigos[Math.floor(Math.random() * codigos.length)]


        let clon = {
            edad: nombreRam,
            codigo: condigoRam
        }
        if (clon.edad > edadMayor) {
            edadMayor = clon.edad                                      
        }

        arregloColnes.push(clon)        
                                   
    }

    for(const obj of arregloColnes){
                if(obj.edad === edadMayor){
                    repe++
                }
         } 
    console.log("la edad mayor es: " + edadMayor)
    console.log("numero de veces que se repite la edad mayor: " + repe)

    return arregloColnes

}


console.log(clones())



