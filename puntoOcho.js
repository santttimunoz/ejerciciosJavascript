let planetas = Array({
    nombre:"pluton",
    latitud:3,
    longitud:6,
    nivelOxi:-14,
    volumen:6
},
{
    nombre:"tierra",
    latitud:3,
    longitud:6,
    nivelOxi:10,
    volumen:8
},
{
    nombre:"juoiter",
    latitud:6,
    longitud:4,
    nivelOxi:-14,
    volumen:7
}
)
// let suma = planetas[0].volumen + planetas[1].volumen + planetas[2].volumen
// let sumaOxin = (planetas[0].nivelOxi + planetas[0].nivelOxi + planetas[0].nivelOxi)*100

//el metodo map siempre devuelve otro arreglo
// function analizarPlanetas(planetas){
//     let suma = 0    
//     let mapa = planetas.map(function(planeta){   
//         suma += planeta.volumen        
//         return (planeta)        
//     })
//     return suma
// }

function analizarPlanetas(planetas){
        
    let mapa = planetas.map(function(planeta){                 
        return (planeta.volumen)                
    })
    let suma = 0
    mapa.forEach(function(volumenAgua){
        suma = suma + volumenAgua
    })
    return suma
}

function nivelOxiPorCien(planetas){
    let suma = 0    
    let mapa = planetas.map(function(planeta){   
        suma += planeta.volumen * 100        
        return (planeta)        
    })
    return suma
}

function nivelNegativo(planetas){
       
    let mapa = planetas.map(function(planeta){  
        if(planeta.nivelOxi < 0){          
            return (planeta.nivelOxi)       
        }                                                            
    })
    return mapa
}

console.log(analizarPlanetas(planetas))
