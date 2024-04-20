import http, { createServer } from 'node:http'

/*
L1: E3
L2: C5
L3: D1

P1:A5
P2:A1
P3:B4
*/

let L1 = false
let L2 =  false
let L3 = false
let P1 = false
let P2 =  false
let P3 = false

const sv = createServer((req, res)=>{

    const path = req.url
    const met = req.method
    if(met === 'GET'){
        switch (path){
            case '/E3':
                L1 = true
                res.statusCode = 200
                res.end('LLAVE 1 ENCONTRADA')
            break;
            case '/C5':
                L2 = true
                res.statusCode = 200
                res.end('LLAVE 2 ENCONTRADA')
            break;
            case '/D1':
                L3 = true
                res.statusCode = 200
                res.end('LLAVE 3 ENCONTRADA')
            break;
            case '/Frase':
                if(P1 && P2 && P3 == true){
                    res.statusCode = 200
                    res.end('DOCONSEGUI.')
                }
            break;
            default:
                res.statusCode = 404
                res.end("Ruta no encontrada")
        }
        return
    } else if(met === 'POST'){
        switch (path){
            case '/A5':
                if(L1 == true){
                    P1 = true
                    res.statusCode = 200
                    res.end('PUERTA 1 ENCONTRADA')
                }
                else{
                    res.statusCode = 403
                    res.end('Acceso prohibido, necesita otra llave')
                }
            break;
            case '/A1':
                if(L2 == true){
                    P2 = true
                    res.statusCode = 200
                    res.end('PUERTA 2 ENCONTRADA')
                }
                else{
                    res.statusCode = 403
                    res.end('Acceso prohibido, necesita otra llave')
                }

            break;
            case '/B4':
                if(L3 == true){
                    P3 = true
                    res.statusCode = 200
                    res.end('PUERTA 3 ENCONTRADA')
                }
                else{
                    res.statusCode = 403
                    res.end('Acceso prohibido, necesita otra llave')
                }
            break;
            default:
                res.statusCode = 404
                res.end("Ruta no encontrada")
        }

    } else{
        res.end('Vacio')
    }
    
        
})

sv.listen(3001)


