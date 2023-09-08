function dieta(n) {

    let alimentos = []

    let filteredAlimentos

    let suma = 0

    let alimento

    for (i = 0; i < n; i++) {
        let nombres = ['cucarachaEspacial', 'fileteDeTulkun', 'pluTomates']
        let nombreRam = nombres[Math.floor(Math.random() * nombres.length)]

        let tipos = ['vegetal', 'animal', 'insecto']
        let typeRam = tipos[Math.floor(Math.random() * tipos.length)]

        let energia = Array.from({ length: 20 }, () => Math.floor(Math.random() * (200 - 500 + 1) + 500))
        let energiaRam = energia[Math.floor(Math.random() * energia.length)]

        alimento = {
            nombre: nombreRam,
            tipo: typeRam,
            nivelEnergia: energiaRam
        }
        switch (alimento.nombre) {
            case 'fileteDeTulkun': alimento.tipo = 'animal'
                break
            case 'cucarachaEspacial': alimento.tipo = 'insecto'
                break
            case 'pluTomates': alimento.tipo = 'vegetal'
                break
        }

        alimentos.push(alimento)

        filteredAlimentos = alimentos.filter((alimento) => {
            return alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200;
        });
        

    }    
return filteredAlimentos

}

console.log(dieta(10))

