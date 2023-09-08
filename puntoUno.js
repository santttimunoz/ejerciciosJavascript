//funcion tradicional
function distacia(name, coorPlanetax1, coorPlanetax2, coorPlanetay1, coorPlanetay2){
   return `la distacia del planeta ${name} es: ${Math.sqrt( Math.pow(coorPlanetax2 - coorPlanetax1, 2) + Math.pow(coorPlanetay2 - coorPlanetay1, 2) )}`
}

console.log(distacia("namecu", 230, 56, 34, 23))

//funcion flecha
let distance = (name, coorPlanetax1, coorPlanetax2, coorPlanetay1, coorPlanetay2) =>{
   return `la distacia del planeta ${name} es: ${Math.sqrt( Math.pow(coorPlanetax2 - coorPlanetax1, 2) + Math.pow(coorPlanetay2 - coorPlanetay1, 2) )}`
}

console.log(distacia("namecu", 230, 56, 34, 23))