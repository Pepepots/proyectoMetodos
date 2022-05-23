export const gaussJordan = (matriz) => {
    const reducir = (cor) => {

        const a = cor[0]
        const b = cor[1]
    
        if (matriz[a][b] !== 0) {
            let ec1 = matriz[b]
            let ec2 = matriz[a]
    
            if (matriz[b][b] < 0 && matriz[a][b] > 0) {
                ec1 = ec1.map((n) => n * matriz[a][b])
                ec2 = ec2.map((n) => n * -matriz[b][b])
    
            } else if (matriz[b][b] > 0 && matriz[a][b] < 0) {
                ec1 = ec1.map((n) => n * -matriz[a][b])
                ec2 = ec2.map((n) => n * matriz[b][b])
            } else {
                ec1 = ec1.map((n) => n * matriz[a][b])
                ec2 = ec2.map((n) => n * -matriz[b][b])
            }
    
            ec2 = ec2.map((n, i) => n + ec1[i])
    
            matriz[a] = ec2
    
        }
    }
    
    const formatIdentidad = (matriz) => {
        
        matriz = matriz.map( (ec, i) => {
            if (ec[i] !== 1) {
                ec = ec.map( (n) => n/ec[i])
            }
            return ec
        })
    
        return matriz
    }
    
    let cor = []
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i !== j && j < matriz[i].length - 1) {
                cor.push([j,i])
            }
        }
    }
    
    for (let i = 0; i < cor.length; i++) {
        const pos = cor[i];
        reducir(pos)
    }
    
    matriz = formatIdentidad(matriz)

    return matriz
}

// ------------------------------------------------------------------------------------------------

export const despejarVariable = ( matriz, posicionAdespejar) => {
   
    const div = matriz.splice(posicionAdespejar,1)

    const resolver = (var1, var2) => {
        return ((-(matriz[0])*var1) + (-(matriz[1])*var2) + matriz[2])/(div[0])
    }

    return resolver
} 
